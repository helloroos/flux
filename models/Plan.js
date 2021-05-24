const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: [String], // default: []
        required: true
    }
}, {
    timestamps: true
})

// Model creation & export
module.exports = Plan = mongoose.model('Plan', PlanSchema);