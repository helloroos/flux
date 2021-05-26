const express = require("express");
const router = express.Router();
const Suggestion = require('../../models/Suggestion');
const Comment = require('../../models/Comment');
const passport = require('passport');
// const db = require('../../config/keys').mongoURI;

// Create a comment on suggestion's page
router.post('/suggestion/:id/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const suggestionId = req.params.id;
        const newComment = new Comment ({
            body: req.body.body,
            author: req.user,
            suggestion: suggestionId
        });
        const update = { comments: newComment._id }
        newComment.save()
            .then((result) => {
                Suggestion.findOne({ _id: suggestionId }, (err, suggestion) => {
                    if (suggestion) {
                        suggestion.comments.push(newComment);
                        suggestion.save();
                        res.json({ message: 'Comment created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            }
        )
        // Add comment to plan
    }
);

module.exports = router;