// update remove a document with a given _id

var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];
var collectionName = process.argv[3];
var idToRemove = process.argv[4];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    var users = db.collection(collectionName);
    users.remove(
        {_id: idToRemove},
        function (err) {
            if (err) throw err;
            db.close();
        }
    );
});
