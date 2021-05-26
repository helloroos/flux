const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Plan = require("./Plan")
const User = require("./User")
const Comment = require("./Comment")

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
        type: [Date],
        
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
    }],
    comments: [{
        type: Schema.Types.ObjectID,
        ref: Comment,
    }],
    upvotes: [{
        type: Schema.Types.ObjectID,
        ref: User,
    }],
    downvotes: [{
        type: Schema.Types.ObjectID,
        ref: User,
    }]
}, {
    timestamps: true
})

module.exports = Suggestion = mongoose.model('Suggestion', SuggestionSchema);