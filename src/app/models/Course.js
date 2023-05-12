const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    id: Schema.ObjectId,
    name: { type: String, maxLength: 200 },
    description: { type: String, maxLength: 500 },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
