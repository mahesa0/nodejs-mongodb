const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik_Thorik");
  var myquery = { kode_mapel: "PJOK" };
  var newvalues = { $set: { kode_mapel: "MTK", nama_mapel: "Matematika" } };
  dbo.collection("Mapel").updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 data berhasil diupdate");
    db.close();
  });
});
