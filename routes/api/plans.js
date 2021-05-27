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

// const response = {
//     "members": [
//         "60abf3a697986e5fc078a05b"
//     ],
//     "suggestions": [],
//     "_id": "60aef17de8dbd32fac519252",
//     "title": "9pm plan",
//     "description": "This is a plan I made at 9pm",
//     "startDate": "2021-05-26T04:00:00.000Z",
//     "endDate": "2021-05-28T04:00:00.000Z",
//     "createdAt": "2021-05-27T01:10:21.272Z",
//     "updatedAt": "2021-05-27T01:10:21.272Z",
//     "__v": 0
// }

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
        .populate({ path: 'suggestions', model: 'Suggestion'})
        .exec((error, plan) => {
            res.json(plan)
        })
    }
);

// const response = {
//     "members": [
//         {
//             "plans": [],
//             "_id": "60abf3a697986e5fc078a05b",
//             "firstName": "michelle",
//             "lastName": "roos",
//             "email": "michelle@mail.com",
//             "password": "$2a$10$uQmZ5a8Cvd3NmDW3lDDsgutC0n3HcKgxLGgQF2nuOy4i9jC4lJTi.",
//             "createdAt": "2021-05-24T18:42:46.757Z",
//             "updatedAt": "2021-05-24T18:42:46.757Z",
//             "__v": 0
//         }
//     ],
//     "suggestions": [],
//     "_id": "60aef17de8dbd32fac519252",
//     "title": "9pm plan",
//     "description": "This is a plan I made at 9pm",
//     "startDate": "2021-05-26T04:00:00.000Z",
//     "endDate": "2021-05-28T04:00:00.000Z",
//     "createdAt": "2021-05-27T01:10:21.272Z",
//     "updatedAt": "2021-05-27T01:10:21.272Z",
//     "__v": 0
// }

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

// const response = {
//     "plandeleted": "plan successfully deleted"
// }

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
                    // res.json(plan)
                } else {
                    res.json({alreadythere: 'You are already added to this travel plan.'})
                };
            }
        }).catch(err => res.json({noplan: 'Sorry, the request could not be completed.'}));
    }
);

// PLAN RESPONSE TO ADD USER
// const response = {
//     "members": [
//         "60abf3a697986e5fc078a05b",
//         "60abf48507afac6044955f87",
//         "60abf2bd39b87b5ef64a561d"
//     ],
//     "suggestions": [],
//     "_id": "60aef17de8dbd32fac519252",
//     "title": "9pm plan",
//     "description": "This is a plan I made at 9pm",
//     "startDate": "2021-05-26T04:00:00.000Z",
//     "endDate": "2021-05-28T04:00:00.000Z",
//     "createdAt": "2021-05-27T01:10:21.272Z",
//     "updatedAt": "2021-05-27T01:30:58.230Z",
//     "__v": 1
// }
  
router.patch('/:id', (req, res) => {

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

    // const title = req.body.title;
    // const description = req.body.description;
    // const planId = { _id: req.params.id };
    // Plan.update(
    //     { _id: planId },
    //     { $set: { title: title, description: description }}
    // ).then(plan => res.json({ message: `D` }));
});

// const response = {
//     "members": [
//         "60abf3a697986e5fc078a05b",
//         "60abf48507afac6044955f87",
//         "60abf2bd39b87b5ef64a561d"
//     ],
//     "suggestions": [],
//     "_id": "60aef17de8dbd32fac519252",
//     "title": null,
//     "description": "Making a change",
//     "startDate": "2021-05-26T04:00:00.000Z",
//     "endDate": "2021-05-28T04:00:00.000Z",
//     "createdAt": "2021-05-27T01:10:21.272Z",
//     "updatedAt": "2021-05-27T02:25:58.166Z",
//     "__v": 2
// }

router.patch('/:id/date',
    (req, res) => {
        const startDate = new Date(req.body.startDate);
        const endDate = new Date(req.body.endDate);
        const planId = { _id: req.params.id };
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


