const express = require("express");
const router = express.Router();
const Suggestion = require('../../models/Suggestion');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const db = require('../../config/keys').mongoURI;

// Create a suggestion on the plan's page
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
                        res.json({ message: 'Suggestion created!' });
                    }
                });
            })
            .catch((error) => {
                res.status(500).json({ error });
            })
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

// 
router.patch('/:suggestion_id/upvote',
    // Should this be on the suggestion page, or the plan page?
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const suggestionId = { _id: req.params.id };
        const update = { upvotes: currUser }

        const plan = Plan.findById(suggestionId);
        console.log(plan.toObject());

        // Plan.findOneAndUpdate(
        //     suggestionId, { $push: update }, { new: true })
        //     .then(suggestion => res.json(suggestion))
        //     .catch(err =>
        //         res.status(404).json({ nosuggestionfound: 'No suggestion found with that id, please try again' })
        //     );
    }
);

module.exports = router;