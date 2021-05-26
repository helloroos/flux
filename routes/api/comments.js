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
            .then(() => {
            // Successfully creates comment + Links to suggestion
            // but does not update the suggestion
            // Returns the first suggestion in the list 
                Suggestion.findOneAndUpdate(suggestionId,
                    { $push: update }, { new: true })
            .then(response => res.json(response))
            .catch((err) => res.status(404).json(err))
            }
        )
        // Add comment to plan
    }
);

module.exports = router;