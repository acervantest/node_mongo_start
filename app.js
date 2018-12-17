const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const PORT = process.env.PORT || 3000;

app.use('/assets', 
  express.static(__dirname + '/public')
);

mongoose.connect(config.getDbConnectionString(), { useMongoClient: true });

setupController(app);

apiController(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));