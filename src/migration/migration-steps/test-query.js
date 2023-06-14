// 'use strict';

// module.exports = {
//     id: '1-simple-query-sample',

//     up : function(db, cb){
//         db.collection('testcollection').insert({ name: 'initial-setup' }, cb);
//     },

//     down : function(db, cb){
//         db.collection('testcollection').remove({ name: 'initial-setup' }, cb);
//     }
// }


// Import the necessary dependencies
const { Migration } = require('mongration');

// Define the migration class
class RenameField extends Migration {
  async up(db) {
    // Perform your schema changes here
    // Example: Rename a field in a collection
    await db.collection('testcollection').insert(
      { name: 'initial-setup'},
    
    );

    // Perform other schema changes as needed

    console.log('Migration completed successfully!');
  }

  async down(db) {
    // Rollback changes if needed
    // Example: Revert the field name back to its original name
    await db.collection('testcollection').insert(
        { name: 'initial-setup'},
      
      );
    console.log('Rollback completed successfully!');
  }
}

// Export an instance of the migration class
module.exports = new RenameField();