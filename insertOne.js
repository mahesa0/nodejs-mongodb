const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("System_Informasi_Akademik");
  var my_object = {
    _id: 1,
    kode_mapel: "H01",
    nama_mapel: "HTML dan CSS",
  };
  dbo.collection("Mata_Pelajaran").insertOne(my_object, function (err, res) {
    if (err) throw err;
    console.log("1 data berhasil ditambahkan!");
    db.close();
  });
});
