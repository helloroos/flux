const User = require('./models/User')
// const User = require('./models/User')
// const User = require('./models/User')
// const User = require('./models/User')

function seedDB() {
        // User.deleteMany({})
    const newUser = new User({
        firstName: "Waldo",
        lastName: "Odlaw",
        email: 'waldo@odlaw.com',
        password: '123456'
    })
    console.log(newUser);
    newUser.save()
        .then(() => console.log('User saved.'))
        .catch(() => console.log('User not saved.'));
}

seedDB();































// var seeder = require('mongoose-seed')
// const db = require('./config/keys').mongoURI;

// seeder.connect(db, function () {
    
//     // takes path to model
//     seeder.loadModels([
//         'models/User.js'
//     ])
    
//     // seeder.clearModels(['users'], function () {
//     //     seeder.populateModels(ratingData, function () {
//     //         seeder.disconnect()
//     //     })
//     // })
    
//     seeder.populateModels(demoUser, function () {
//         seeder.disconnect()
//     })
// })

// const demoUser = [
//     {
//         'model': 'user',
//         'documents': [
//             {
//                 firstName: "Waldo",
//                 lastName: "Odlaw",
//                 email: 'waldo@odlaw.com',
//                 password: '123456'
//             }
//         ]
//     }
// ]
