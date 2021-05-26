const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Plan = require("./Plan")
const User = require("./User")

const SuggestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    budget: {
        type: [String],
    },
    dates: {
        type: [Date], // default: []
        
    },
    plan: [{
        type: Schema.Types.ObjectID,
        ref: Plan,
        required: true
    }],
    user: [{
        type: Schema.Types.ObjectID,
        ref: User,
        required: true
    }]
}, {
    timestamps: true
})

module.exports = Suggestion = mongoose.model('Suggestion', SuggestionSchema);