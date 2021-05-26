const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Plan = require('../../models/Plan');
const User = require('../../models/User');
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
        console.log(req.user);
        
        const newPlan = new Plan({
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            members: req.user,
        });
        newPlan.save().then(plan => res.json(plan))
        
        // const update = {plans: newPlan._id}
        // console.log(req.user)
        // const userId = req.user._id
        // User.findOneAndUpdate(
        //     userId, { $push: update }, { new: true })
        //         // .then(plan => res.json(plan))
                
        // ;
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
        .populate({path: 'members', model: 'User'})
        .populate({ path: 'suggestions', model: 'Suggestion'})
        .exec((error, plan) => {
            console.log(plan)
            res.json(plan)
        })
  });

router.delete('/:id', (req, res) => {
    const planId = req.params.id;
    Plan.deleteOne({ _id: planId })
        .then(() => res.status(200).json({ plandeleted: 'plan successfully deleted' }))
        .catch(err =>
            res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
        );
})

// router.patch('/:id/addmember',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {

//         const currUser = req.user;
//         const planId = { _id: req.params.id };
//         const update = { members: currUser }
//         const plan = Plan.findById(req.params.id)
//         const user = User.findOne({plans: planId});
//         // console.log(plan)
//         // console.log(plan.members)
//         if (!User.findOne({plans: planId})){
//             Plan.findOneAndUpdate(
//                 planId, { $push: update }, { new: true })
//                     .then(plan => res.json(plan))
//                     .catch(err =>
//                         res.status(404).json({ noplanfound: 'No plan found with that id, please try again' })
//                     );
//         } else {
//             res.status(422).json({ userinplan: 'This user is already a part of this plan!' })
//         }
//     }
// );
router.patch('/:id/addmember',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const currUser = req.user;
        const planId = { _id: req.params.id };
        // const update = { members: currUser }
        // const user = User.findOne({plans: planId});
        
        Plan.findOne({ _id: planId }, (err, plan) => {
            if (plan) {
                if (!plan.members.includes(currUser.id)){
                    plan.members.push(currUser);
                    plan.save();
                    res.json({ message: 'Member added!' })
                } else {
                    res.json({alreadythere: 'User is already in the trip!'})
                };
            }
        }).catch(err => res.json({noplan: 'Sorry, no plan with that id'}));
    });
  
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const title = req.body.title;
        const description = req.body.description;
        const planId = { _id: req.params.id };
        let update = { 
            title: title,
            description: description,
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

router.patch('/:id/date',
    (req, res) => {
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const planId = { _id: req.params.id };
        console.log(req.body)
        Plan.update(
            { _id: planId },
            {
              $set: {
                startDate: startDate,
                endDate: endDate
              }
            }
         ).then(plan => res.json({message: `Dates updates to start: ${startDate} and end ${endDate}`}));
          
    }   
);

module.exports = router;


