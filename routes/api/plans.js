const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Plan = require('../../models/Plan');
const User = require('../../models/User');
const Comment = require('../../models/Comment');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validatePlanInput = require('../../validation/plans')
const Suggestion = require('../../models/Suggestion')

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePlanInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newPlan = new Plan({
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            members: req.user,
        });
        newPlan.save().then(plan => res.json(plan))
        
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

// SHOW PLAN
router.get('/:id', (req, res) => {
    Plan.findById(req.params.id)
        .populate({path: 'members', model: 'User'})
        .populate({ path: 'suggestions', model: 'Suggestion', populate: {
            path: 'comments' , model: 'Comment', populate: {
                path: 'author', model: 'User'
            }
        }})
        .exec((error, plan) => {
            res.json(plan)
        })
    }
);

// DELETE PLAN
router.delete('/:id', (req, res) => {
    const planId = req.params.id;
    Plan.deleteOne({ _id: planId })
        .then(() => res.status(200).json({ plandeleted: 'plan successfully deleted' }))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        );
    }
)

// ADD MEMBER TO PLAN
router.patch('/:id/addmember',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const planId = { _id: req.params.id };
        
        Plan.findOne({ _id: planId }, (err, plan) => {
            if (plan) {
                if (!plan.members.includes(currUser.id)){
                    plan.members.push(currUser);
                    plan.save();
                    res.json(req.user);
                } else {
                    res.json({alreadythere: 'You are already added to this travel plan.'})
                };
            }
        }).catch(err => res.json({noplan: 'Sorry, the request could not be completed.'}));
    }
);

// REMOVE MEMBER TO PLAN
router.patch('/:id/removemember',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const currUser = req.user;
        const planId = { _id: req.params.id };
        Plan.findOne({ _id: planId }, (err, plan) => {
            if (plan) {
                if (plan.members.includes(currUser.id)) {
                    plan.members.pop(currUser).then(() => plan.save());
                    res.json(req.user);
                } else {
                    res.json({ notthere: 'User is not added to this travel plan.' })
                };
            }
        }).catch(err => res.json({ noplan: 'Sorry, the request could not be completed.' }));
    }
);

router.patch('/:id', (req, res) => {

        // const title = req.body.title;
        // const description = req.body.description;
        // const startDate = req.body.startDate;
        // const endDate = req.body.endDate;
        // const planId = { _id: req.params.id };

        // console.log(req.body);

        // let update = { 
        //     title: title,
        //     description: description,
        //     startDate: startDate,
        //     endDate: endDate
        // }
        
        // if (!title) {
        //     update = {
        //         description: description,
        //         startDate: startDate,
        //         endDate: endDate
        //     }
        // } else if (!description) {
        //     update = {
        //         title: title,
        //         startDate: startDate,
        //         endDate: endDate
        //     }
        // } else if (!description && !title) {
        //     update = {
        //         startDate: startDate,
        //         endDate: endDate
        //     }
        // } else if (!startDate && !title) {
        //     update = {
        //         description: description
        //     }
        // } else if (!description && !startDate) {
        //     update = {
        //         title: title,
        //     }
        // } else if (!startDate) {
        //     update = {
        //         title: title,
        //         description: description,
        //     }
        // } 
        
        // Plan.findOneAndUpdate(
        //     planId, update, { new: true })
        //         .then(plan => res.json(plan))
        //         .catch(err =>
        //             res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        //         );

    const planId = { _id: req.params.id };
    Plan.update(
        { _id: planId },
        { $set: req.body },
        { new: true , select: "members"}
    ).then(plan => res.json(plan));
});

module.exports = router;


