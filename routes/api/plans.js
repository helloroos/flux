const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Plan = require('../../models/Plan');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validatePlanInput = require('../../validation/plans')

router.post('/',
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



router.get('/user/:user_id', (req, res) => {
    Plan.find({members: req.params.user_id})
        .then(plans => res.json(plans))
        .catch(err =>
            res.status(404).json({ noplansfound: 'No plans can be found for this user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Plan.findById(req.params.id)
        .then(plan => res.json(plan))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        );
});

// router.delete('/:id', (req, res) => {
//     Plan.findById(req.params.id)
      
// })



module.exports = router;


