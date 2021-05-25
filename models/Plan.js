const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");

const PlanSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    members: {
        type: [String], 
        default: [],
        required: true
    },
    members: [{
        type: Schema.Types.ObjectID,
        ref: User
    }]
}, {
    timestamps: true
})

// Model creation & export
module.exports = Plan = mongoose.model('Plan', PlanSchema);