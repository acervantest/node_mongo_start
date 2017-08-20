var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var courseSchema = new Schema({
    title: String,
    description: String
})

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;