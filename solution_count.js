// count number of documents that meet a criteria

var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var collectionName = 'parrots';
var minAge = process.argv[2];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    var collection = db.collection(collectionName);
    collection.count(
        {age: {$gt: +minAge}},
        function (err, count) {
            if (err) throw err;
            console.log(count);
            db.close();
        }
    );
});
