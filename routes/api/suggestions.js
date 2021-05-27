const express = require("express");
const router = express.Router();
const Suggestion = require('../../models/Suggestion');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const db = require('../../config/keys').mongoURI;

// Create a suggestion on the plan's page
// returns new plan and currUser
router.post('/plan/:id/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const planId = req.params.id;
        const newSuggestion = new Suggestion ({
            title: req.body.title,
            description: req.body.description,
            budget: req.body.budget,
            dates: req.body.dates,
            user: req.user,
            plan: planId
        });    
        const update = { suggestions: newSuggestion._id } 
        newSuggestion.save()
            .then((result) => {
                Plan.findOne({ _id: planId }, (err, plan) => {
                    if (plan) {
                        plan.suggestions.push(newSuggestion);
                        plan.save();
                        res.json([newSuggestion, req.user]);
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            }
        )
    }
);

// INDEX for all suggestions of a user
router.get('/user/:user_id', (req, res) => {
    Suggestion.find({user: req.params.user_id})
        .then(plans => res.json(plans))
        .catch(err =>
            res.status(404).json({ noplansfound: 'No plans can be found for this user' }
        )
    );
});

// INDEX for all suggestions of a plan
router.get('/plan/:plan_id',
    // passport.authenticate('jwt', { session: false }),
    (req, res) =>  {
    Suggestion.find({plan: req.params.plan_id})
        .then(sugg => res.json(sugg))
        .catch(err =>
            res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }
        )
    );
});


router.patch('/:suggestion_id/upvote',
    // Should this be on the suggestion page, or the plan page?
    // should change from down to up if clickec
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const suggestionId = { _id: req.params.suggestion_id };

        Suggestion.findOne({ _id: suggestionId }, (err, suggestion) => {
            if (suggestion) {
                if (!suggestion.upvotes.includes(currUser.id)) {
                    if (suggestion.downvotes.includes(currUser.id)) {
                        suggestion.downvotes.pop(currUser)
                            .then(() => suggestion.save());
                        console.log('User removed from downvotes');
                    }
                    suggestion.upvotes.push(currUser)
                        .then(() => suggestion.save());
                    // res.json({ votesuccess: 'Upvote successful!' })
                } else {
                    // res.json({ alreadythere: 'Duplicate vote' })
                };
                res.json(suggestion)
            }
        }).catch(err => res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }));
    }
);

router.patch('/:suggestion_id/removeupvote',
    // Should this be on the suggestion page, or the plan page?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const suggestionId = { _id: req.params.suggestion_id };

        Suggestion.findOne({ _id: suggestionId }, (err, suggestion) => {
            if (suggestion) {
                if (suggestion.upvotes.includes(currUser.id)) {
                    suggestion.upvotes.pop(currUser);
                    suggestion.save();
                    // res.json({ votesuccess: 'Remove successful!' })
                } else {
                    // res.json({ notthere: 'User has not voted' })
                };
                res.json(suggestion)
            }
        }).catch(err => res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }));
    }
);

router.patch('/:suggestion_id/downvote',
    // Should this be on the suggestion page, or the plan page?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const suggestionId = { _id: req.params.suggestion_id };

        Suggestion.findOne({ _id: suggestionId }, (err, suggestion) => {
            if (suggestion) {
                if (!suggestion.downvotes.includes(currUser.id)) {
                    if (suggestion.upvotes.includes(currUser.id)) {
                        suggestion.upvotes.pop(currUser)
                            .then(() => suggestion.save());
                        console.log('User removed from downvotes');
                    }
                    suggestion.downvotes.push(currUser)
                        .then(() => suggestion.save());
                    // res.json({ votesuccess: 'Downvote successful!' })
                } else {
                    // res.json({ alreadythere: 'Duplicate vote' })
                };
                res.json(suggestion)
            }
        }).catch(err => res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }));
    }
);

router.patch('/:suggestion_id/removedownvote',
    // Should this be on the suggestion page, or the plan page?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const suggestionId = { _id: req.params.suggestion_id };

        Suggestion.findOne({ _id: suggestionId }, (err, suggestion) => {
            if (suggestion) {
                if (suggestion.downvotes.includes(currUser.id)) {
                    suggestion.downvotes.pop(currUser);
                    suggestion.save();
                    // res.json({ votesuccess: 'Remove successful!' })
                } else {
                    // res.json({ notthere: 'User has not voted' })
                };
                res.json(suggestion)
            }
        }).catch(err => res.status(404).json({ noplansfound: 'No suggestions can be found for this user' }));
    }
);

router.patch('/:id',
    (req, res) => {

        const title = req.body.title;
        const description = req.body.description;
        const budget = req.body.budget;
        
        const suggId = { _id: req.params.id };
        let update = { 
            title: title,
            description: description,
            budget: budget
        }
        
        if (!title && !budget) {
            update = {
                description: description
            }
        } else if (!description && !budget) {
            update = {
                title: title
            }
        } else if (!description && !title) {
            update = {
                budget: budget
            }
        } else if (!description) {
            update = {
                title: title,
                budget: budget
            }
        } else if (!title) {
            update = {
                description: description,
                budget: budget
            }
        } else if (!budget) {
            update = {
                description: description,
                title: title
            }
        }
        
        Suggestion.findOneAndUpdate(
            suggId, update, { new: true })
                .then(sugg => res.json(sugg))
                .catch(err =>
                    res.status(404).json({ nosuggfound: 'No suggestion found with that id, please try again' })
                );
    }
);

router.delete('/:id', (req, res) => {
    const suggId = req.params.id;
    Suggestion.deleteOne({ _id: suggId })
        .then(() => res.status(200).json({ suggestiondeleted: 'suggestion successfully deleted' }))
        .catch(err =>
            res.status(404).json({ nosuggestionfound: 'No suggestion found with that id, please try again' })
        );
})

module.exports = router;