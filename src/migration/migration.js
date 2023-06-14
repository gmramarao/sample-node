'use strict';
const config = require("../config");
var path = require('path');
//var Migration = require('mongration').Migration;

// var dbConfig = {
// 	// hosts: `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.juatdby.mongodb.net/`,
// 	// db: config.DATABASE,
// 	migrationCollection: 'migrationversion',
//     // hosts: `cluster0.juatdby.mongodb.net/`,
//     // db: config.DATABASE,
//     // user : config.DB_USER,
//     // password : config.DB_PASSWORD,
//     //mongoUri : `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.juatdby.mongodb.net/${config.DATABASE}`,
//     mongoUri : `mongodb+srv://ramarao:${config.DB_PASSWORD}@cluster0.juatdby.mongodb.net/?retryWrites=true&w=majority`
//     //roles: [ { role: 'root', db: 'admin' } ]
// };
// var migration = new Migration(dbConfig);

// migration.addAllFromPath(path.join(__dirname, './migration-steps/'));

// migration.migrate(function(err, results){
//     console.log(err, results);
// });

// module.exports = {
//     mongodb: {
//       url: `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.juatdby.mongodb.net/`,
//       databaseName: `${config.DATABASE}`,
//     },
//     migrationsDir: path.resolve(__dirname, './migration-steps/test-query.js') //path.join(__dirname, './migration-steps/'),
//   };

module.exports = {
  mongodb: {
    url: `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.juatdby.mongodb.net/${config.DATABASE}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: './migration-steps',
};