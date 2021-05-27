const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const db = require('./config/keys').mongoURI;
const bcrypt = require('bcryptjs');

const User = require('./models/User')

// connect to DB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully")) // listen 
    .catch(err => console.log(err));


function seedDB() {
        //Promise.all 
        // User.deleteMany({})
    const demoUser = new User({
        firstName: 'Waldo',
        lastName: 'Odlaw',
        email: 'waldo@odlaw.com',
        password: '123456'
    })

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(demoUser.password, salt, (err, hash) => {
            if (err) throw err;
            demoUser.password = hash;
            demoUser.save()
                .then(() => console.log('User saved.'))
                .catch(() => console.log('User not saved.'));
        })
    })
}

seedDB();































// var seeder = require('mongoose-seed')
// const db = require('./config/keys').mongoURI;

// seeder.connect(db, function () {
    
//     // takes path to model
//     seeder.loadModels([
//         'models/User.js'
//     ])
    
//     // seeder.clearModels(['users'], function () {
//     //     seeder.populateModels(ratingData, function () {
//     //         seeder.disconnect()
//     //     })
//     // })
    
//     seeder.populateModels(demoUser, function () {
//         seeder.disconnect()
//     })
// })

// const demoUser = [
//     {
//         'model': 'user',
//         'documents': [
//             {
//                 firstName: "Waldo",
//                 lastName: "Odlaw",
//                 email: 'waldo@odlaw.com',
//                 password: '123456'
//             }
//         ]
//     }
// ]
