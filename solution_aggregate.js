// get aggregate data for a field across documents, such as sums or averages

var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var collectionName = 'prices';
var sizeToCheck = process.argv[2];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    var collection = db.collection(collectionName);
    collection.aggregate(
        [
            {$match: {size: sizeToCheck}},
            {$group: {_id: 'results id name here', avg:{$avg:'$price'}}}
        ]
    ).toArray(function(err, results) {
        if (err) throw err;
        console.log(Number(results[0].avg).toFixed(2));
        db.close();
    });
});
