var Courses = require('../models/course');

module.exports = function(app){
    
    app.get('/api/setupCourses', function(req, res){
        
        //seed data
        var seedData = [
            {
                title: 'Java',
                description: 'Java 7 course description'
            },
            {
                title: 'Javascript',
                description: 'Javascript course description'
            },
            {
                title: 'Node.js',
                description: 'Node.js course description'
            }
        ];
       
        Courses.create(seedData, function(err, results){
            res.send(results);
        });
    });
    
}