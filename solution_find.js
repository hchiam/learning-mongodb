var mongo = require('mongodb').MongoClient;

var minAge = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    if (err) throw err;
    var parrots = db.collection('parrots');
    parrots.find(
        {age: {$gt: +minAge}}
        // find all parrots with age > minAge ('$gt' = 'Greater Than')
    ).toArray(function(err, docs) {
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});
