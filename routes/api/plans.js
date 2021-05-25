const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validatePlanInput = require('../../validation/plans')

router.post('/plan',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePlanInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        console.log(req.user);
        const newPlan = new Plan({
            title: req.body.title,
            description: req.body.description,
            members: req.user
        });
        newPlan.save().then(plan => res.json(plan));
    }
);

module.exports = router;
