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
                        suggestion.save()
                    }
                })
            })
            .then((savedComment) => res.json(savedComment))
            .catch((error) => {
                res.status(500).json({ error });
            }
        )
    }
);

// Should this be on the suggestion page, or the plan page?
router.patch('/:id', (req, res) => {
    const commentId = req.params.id;
    const newComment = req.body;
    Comment.findById(commentId)
        .then((result) => {
            Comment.findById({ _id: commentId }, (err, comment) => {
                if (comment) {
                    comment.update(newComment)
                        .then(() => comment.save())
                        .then((savedComment) => res.json(savedComment))
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        }
    )
})

// INDEX for all comments of a user
router.get('/user/:user_id', (req, res) => {
    Comment.find({ author: req.params.user_id })
        .then(comments => res.json(comments))
        .catch(err =>
            res.status(404).json({ noplansfound: 'No comments can be found for this user' }
            )
        );
});

// INDEX for all comments of a suggestion
router.get('/suggestion/:suggestion_id',
    (req, res) => {
        Comment.find({ suggestion: req.params.suggestion_id })
            .then(sugg => res.json(sugg))
            .catch(err =>
                res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }
                )
            );
    }
);

router.delete('/:id', (req, res) => {
    const commentId = req.params.id;
    Comment.deleteOne({ _id: commentId })
        .then(() => res.status(200).json({ commentdeleted: 'suggestion successfully deleted' }))
        .catch(err =>
            res.status(404).json({ nocommentfound: 'No suggestion found with that id, please try again' })
        );
})

module.exports = router;