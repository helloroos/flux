const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User");
const Suggestion = require("./Suggestion");

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: [{
        type: Schema.Types.ObjectID,
        ref: User,
    }],
    suggestion: [{
        type: Schema.Types.ObjectID,
        ref: Suggestion,
    }]
}, {
    timestamps: true
})

module.exports = Comment = mongoose.model('Comment', CommentSchema);