
/*
Replace URL below if you are using a remote MongoDB
Replace jokes in the connection string if you wan't your "database" to have another name
 */
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/jokes", function(err, db) {
  var collection = db.collection('jokes');
  collection.insertMany(jokes,function(err,data){
    console.log(JSON.stringify(data));
    db.close();
  });
});

var jokes = [

  {
    "joke" : " Reality is an illusion created by a lack of alcohol",
    "type" : ["short", "alcohol", "quote"],
    "reference": { "author" : "Someone", "link" : ""},
    "lastEdited" : new Date()
  },
  {
    "joke" : "I used to think the brain was the most important organ. Then I thought, look what’s telling me that",
    "type" : ["short", "joke"],
    "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
    "lastEdited" : new Date()
  },
  {
    "joke" : "You kill vegetarian vampires with a steak to the heart",
    "type" : ["short", "joke","foot"],
    "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
    "lastEdited" : new Date()
  },
  {
    "joke" : "A blind man walks into a bar. And a table. And a chair",
    "type" : ["short", "joke","blind"],
    "reference": { "author" : "Someone", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
    "lastEdited" : new Date()
  },
  {
    "joke" : "How does NASA organize their company parties? They planet",
    "type" : ["short", "joke","riddle"],
    "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
    "lastEdited" : new Date()
  }
,
  {
    "joke" : "Why was six afraid of seven? Because seven was a well known six offender",
    "type" : ["short", "joke","riddle"],
    "reference": { "author" : "Unknown", "link" : "http://thoughtcatalog.com/christopher-hudspeth/2013/09/50-terrible-quick-jokes-thatll-get-you-a-laugh-on-demand/"},
    "lastEdited" : new Date()
  }
]

