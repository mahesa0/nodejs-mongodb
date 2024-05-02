const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("System_Informasi_Akademik");
  dbo.dropCollection("nilaiextra", function (err, res) {
    if (err) throw err;
    if (res) console.log("Koleksi berhasil dihapus!");
    db.close();
  });
});
