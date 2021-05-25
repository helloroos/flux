// const Plan = require('../models/Plan');
// const User = require('../models/User');

// module.exports = {
//     create: async (req, res) => {

//         console.log(req.params);
//         user = req.params;
//         id = user.id;
//         const { title, description } = req.body;
//         const plan = await Plan.create({
//             title,
//             description,
//             members: id
//         });
//         await plan.save();

//         const userById = await User.findById(id);

//         userById.plans.push(plan);
//         await userById.save();

//         return res.send(userById);
//     },
//     userByPlan: async (req, res) => {
//         const { id } = req.params;
//         const userByPlan = await Plan.findById(id).populate('user');
//         res.send(userByPlan);
//     }
// }