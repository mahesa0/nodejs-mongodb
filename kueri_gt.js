const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .find({ thn_terbit: { $gt: 2020 } })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
