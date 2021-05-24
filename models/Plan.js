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
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

module.exports = Plan = mongoose.model('Plan', PlanSchema);