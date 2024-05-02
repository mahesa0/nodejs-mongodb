const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("perpustakaan");
  dbo
    .collection("databuku")
    .findOne(
      { judul_buku: "NodeJS dan MongoDB" },
      { projection: { _id: 0, judul_buku: 1, pengarang: 1 } },
      function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      }
    );
});
