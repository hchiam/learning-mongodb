// get only specific fields from documents that have age greater than the first parameter given (process.argv[2])

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = process.argv[2];

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    db.collection('parrots').find({
        age: {
            $gt: +age
            // $gt is a special query selector
            // + turns age into a number
        }
    },
    {
        name: 1, // DELETE this line to exclude name from result
        age: 1, // DELETE this line to exclude name from result
        _id: 0 // WRITE "0" to exclude _id from result
    }).toArray(function(err, documents) {
        if (err) throw err;
        console.log(documents);
        db.close();
    });
});
