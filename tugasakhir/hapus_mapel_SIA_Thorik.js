const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik_Thorik");
  var myquery = { nama_mapel: "Matematika" };
  dbo.collection("Mapel").deleteMany(myquery, function (err, res) {
    if (err) throw err;
    console.log(res.deletedCount + " data yang berhasil dihapus");
    db.close();
  });
});
