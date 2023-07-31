const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    id: Schema.ObjectId,
    name: { type: String, maxLength: 200, require: true, },
    description: { type: String, maxLength: 500, require: true, },
    img: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true, },
    level: { type: String },
}, { timestamps: true });

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
