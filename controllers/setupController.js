var Courses = require('../models/course');

module.exports = function(app){
    
    app.get('/api/setupCourses', function(req, res){
        
        //seed data
        var starterCourses = [
            {
                title: 'Java',
                description: 'Java 7 course description'
            },
            {
                title: 'Javascript',
                description: 'Javascript course description'
            },
            {
                title: 'Springboot',
                description: 'Spring boot course description'
            }
        ];
       
        Courses.create(starterCourses, function(err, results){
            res.send(results);
        });
    });
    
}