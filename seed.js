const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const db = require('./config/keys').mongoURI;
const bcrypt = require('bcryptjs');
const User = require('./models/User')

// connect to DB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully")) // listen 
    .catch(err => console.log(err));


function seedDB() {
        // User.deleteMany({})

    const demoUser = new User({
        firstName: 'Waldo',
        lastName: 'Odlaw',
        email: 'waldo@odlaw.com',
        password: '123456',
    })

    const user1 = new User({
        firstName: 'Brad ',
        lastName: 'Bradson',
        email: 'BradBradon@mail.com',
        password: '123456',
        
    })

    const user2 = new User({
        firstName: 'Jo',
        lastName: 'Trip',
        email: 'gotJoTrip@mail.com',
        password: '123456',
        
    })

    const pass1 = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(demoUser.password, salt, (err, hash) => {
            if (err) throw err;
            demoUser.password = hash;
            demoUser.save()
                .then(() => console.log('User saved.'))
                .catch(() => console.log('User not saved.'));
        })
    })

    const pass2 = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user1.password, salt, (err, hash) => {
            if (err) throw err;
            user1.password = hash;
            user1.save()
                .then(() => console.log('User saved.'))
                .catch(() => console.log('User not saved.'));
        })
    })

    const pass3 = bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user2.password, salt, (err, hash) => {
            if (err) throw err;
            user2.password = hash;
            user2.save()
                .then(() => console.log('User saved.'))
                .catch(() => console.log('User not saved.'));
        })
    })

    const plans = () => {
        const plan1 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan2 = new Plan({
            title: 'a/A Graduation Meetup',
            description: 'We did it! Time to celebrate with some fun and good company :)',
            startDate: '2021-06-11',
            endDate: '2021-06-15',
            members: [],
        })

        const plan3 = new Plan({
            title: 'Family trip to Athens',
            description: 'Trip to Greece with the Fam! But that is patheNON of your business',
            startDate: '2021-07-01',
            endDate: '2021-07-22',
            members: [],
        })

        const plan4 = new Plan({
            title: "Waldo's wedding weekend",
            description: "Let's have some fun times this weekend and maybe we could do a little get away during the week",
            startDate: '2021-07-23',
            endDate: '2021-07-29',
            members: [],
        })

        const plan5 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan6 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan7 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan8 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan9 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })

        const plan10 = new Plan({
            title: 'Girls trip to Italy!',
            description: 'Super fun girls trip to Italy...food, wine and friends!',
            startDate: '2021-06-01',
            endDate: '2021-06-12',
            members: [],
        })
    }

    const suggestions = () => {
        const suggestion1 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion2 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion3 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion4 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion5 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion6 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion7 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion8 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion9 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion10 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })

        const suggestion11 = new Suggestion({
            title: "Weekend in wine country",
            description: 'Lets have a weekend in Tuscany',
            budget:'1',
            plan: [],
            user: [],
            comments: [],
            upvotes: [],
            downvotes: [],
        })
    }

    const comments = () => {

        const comment1 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment2 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment3 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment4 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment5 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment6 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment7 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment8 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment9 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment10 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment11 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment12 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment13 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }

        const comment14 = {
            body: 'What a terrible suggestion',
            author: [],
            suggestion: []
        }
    }


    Promise.all([pass1, pass2, pass3, ]).then((values) => {
        console.log(values);
    });
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
