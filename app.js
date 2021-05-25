const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const path = require('path');
const users = require('./routes/api/users');
const plans = require('./routes/api/plans');
const email = require('./routes/api/emails');
const suggestions = require('./routes/api/suggestions');

const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// connect to DB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully")) // listen 
    .catch(err => console.log(err));

// validations
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);

// parsing encoded message requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api/users", users);
app.use("/api/plans", plans);
app.use("/api/email", email);
app.use("/api/suggestions", suggestions);


// server port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));