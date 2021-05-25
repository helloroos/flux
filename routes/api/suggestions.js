const express = require("express");
const router = express.Router();
const Suggestion = require('../../models/Suggestion');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
// const validatePlanInput = require('../../validation/plans')

router.post('/plan/:planId/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // const { errors, isValid } = validatePlanInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const planId = req.params.planId;
        const plan = Plan.findById(planId);
        console.log(req.params)
        console.log(planId)
        // console.log(plan)
        // console.log(req.user)
        const newSuggestion = new Suggestion({
            title: req.body.title,
            description: req.body.description,
            budget: req.body.budget,
            dates: req.body.dates,
            user: req.user,
            plan: plan
        });
        console.log(newSuggestion)
        newSuggestion.save().then(suggestion => res.json(suggestion))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        );;
    }
);



module.exports = router;