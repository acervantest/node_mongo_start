var Course = require('../models/course');
var bodyParser = require('body-parser');

module.exports = function(app){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.get('/api/allCourses', function(req, res){
        
        Course.find({}, function(err, coursesList){
            if(err) throw err;
            
            res.send(coursesList);
        });
    });
    
    app.get('/api/courses/:cname', function(req, res){
           
        Course.find({ title: req.params.cname },
           function(err, courses){
               if(err) throw err;

               res.send(courses);
        }); 
    });
    
    app.get('/api/course/:id', function(req, res){
        
       Course.findById({ _id: req.params.id}, function(err, course){
           if(err) throw err;
           
           res.send(course);
       });   
    });
    
    app.post('/api/course', function(req, res){
        
        if(req.body.id){
            
            Course.findByIdAndUpdate( req.body.id, {
                title: req.body.title,
                description: req.body.description
            }, function(err, course){
                if(err) throw err;
                
                res.send('Success');
            });
        
        }else{
            
            var newCourse = Course({
                title: req.body.title,
                description: req.body.description
            });
            
            newCourse.save(function(err){
                res.send('Success');
            });
        }
    });
    
    app.delete('/api/course', function(req, res){
        
        Course.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            
            res.send('Success');
        })
    });
    
}
