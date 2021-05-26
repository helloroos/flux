const express = require("express");
const router = express.Router();
const Suggestion = require('../../models/Suggestion');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const db = require('../../config/keys').mongoURI;
// const validatePlanInput = require('../../validation/plans')

router.post('/plan/:id/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // const { errors, isValid } = validatePlanInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const planId = req.params.id;
        const plan = Plan.find({_id: req.params.id})
        console.log(req.params)
        console.log(planId)
        console.log(Plan.find({}))
        // console.log(plan)
        // console.log(req.user)
        const newSuggestion = new Suggestion({
            title: req.body.title,
            description: req.body.description,
            budget: req.body.budget,
            dates: req.body.dates,
            user: req.user,
            plan: planId
        });
        debugger
        console.log(newSuggestion)
        
        newSuggestion.save().then(suggestion => res.json(suggestion))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        )
        const update = {suggestions: newSuggestion._id}
        Plan.findOneAndUpdate(
            planId, { $push: update }, { new: true })
                .then(plan => res.json(plan))
        ;
    }
);



module.exports = router;