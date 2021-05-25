// const User = require('../models/User');

// module.exports = {
//     create: async (req, res) => {

//         console.log(req.params);
//         const { firstName, lastName, email, passowrd } = req.body;
//         const user = await User.create({
//             firstName,
//             lastName,
//             email, 
//             password
//         })

//         return res.send(user)
//     },

//     find: async (req, res) => {
//         const user = await User.find()
//         return res.send(user)
//     },
//     plansByUser: async (req, res) => {
//         const { id } = req.params;
//         const user = await User.findById(id).populate('plans');

//         res.send(user.plans);
//     }
// }