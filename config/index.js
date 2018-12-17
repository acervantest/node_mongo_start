var configValues = require('./config');

const YOUR_DB_NAME = '';

module.exports = {
    
    getDbConnectionString: function(){
        return `mongodb://localhost:27017/${YOUR_DB_NAME}`;
    }
}