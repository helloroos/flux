const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        ref: Plan
    }],
    user: [{
        type: Schema.Types.ObjectID,
        ref: User
    }]
}, {
    timestamps: true
})

module.exports = Plan = mongoose.model('Suggestion', SuggestionSchema);