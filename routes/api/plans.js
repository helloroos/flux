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

router.delete('/:id', (req, res) => {
    const planId = req.params.id;
    Plan.deleteOne({ _id: planId })
        .then(() => res.status(200).json({ plandeleted: 'plan successfully deleted' }))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        );
})

router.patch('/:id/addmember',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const planId = { _id: req.params.id };
        const update = { members: currUser }

        Plan.findOneAndUpdate(
            planId, { $push: update }, { new: true })
                .then(plan => res.json(plan))
                .catch(err =>
                    res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
                );
    }
);

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const title = req.body.title;
        const description = req.body.description;
        const planId = { _id: req.params.id };
        let update = { 
            title: title,
            description: description
        }
        
        if (!title) {
            update = {
                description: description
            }
        } else if (!description) {
            update = {
                title: title
            }
        }

        Plan.findOneAndUpdate(
            planId, update, { new: true })
                .then(plan => res.json(plan))
                .catch(err =>
                    res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
                );
    }
);



module.exports = router;


