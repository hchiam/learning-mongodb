// update a document's properties

var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    var users = db.collection('users');
    users.update(
        {username: 'tinatime'}, // find user with username == 'tinatime'
        {$set:
            {age: 40} // set that user's age to 40
        },
        function(err) {
            if (err) throw err;
            db.close();
        }
    );
});
