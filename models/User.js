const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Plan = require("./Plan");

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    plans: [{
        type: Schema.Types.ObjectID,
        ref: Plan
    }]
}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);