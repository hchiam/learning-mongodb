// insert a "document" with firstname and lastName properties

var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];
var doc = {'firstName':firstName,'lastName':lastName};

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
    if (err) throw err;
    // db gives access to the database
    var docs = db.collection('docs');
    docs.insert(
        doc,
        function(err,data) {
            console.log(JSON.stringify(doc));
            db.close();
        }
    );
});
