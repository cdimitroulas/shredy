const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.Promise = global.Promise;

  mongoose.connect(app.get('mongodb'), {
    useMongoClient: true
  })
    .then(() => {
      console.log(`Connected to db at ${app.get('mongodb')}`)
    })
    .catch(error => {
      console.log(`Error connecting to mongodb: ${error.message}`)
    });


  app.set('mongooseClient', mongoose);
};
