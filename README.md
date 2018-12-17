## Node.js & Mongodb web API
API exposing CRUD functionality using Node.js server and Mongodb

### Build and run
#### Prerequisites

- Mongodb
- Node.js

#### Configurations

Start mongodb and create a new db, open `config/index.js` file and set the name of your newly created db.

Type

     npm install

#### From terminal

Go to your project root directory and type:

     node app

### Run

- Open your browser and go to http://localhost:3000/api/setupCourses

	The project contains a simple model called Course, it has only three fields: id, title and description.
  
       { id, title, description }
       

- Use the following endpoints to interact with the database:
      
    * `http://localhost:3000/api/allCourses`: (get method) returns a list containing all courses in the Database
    
 	* `http://localhost:3000/api/course/:name` (get method) returns a course after performing a search by name 

	* `http://localhost:3000/api/course/:id` (get method) returns a course after performing a search by id

	* `http://localhost:3000/api/course`  (post method)
 
	* `http://localhost:3000/api/course`  (delete method) 
