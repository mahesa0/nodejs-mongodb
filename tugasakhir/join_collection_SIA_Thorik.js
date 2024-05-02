const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Sistem_Informasi_Akademik_Thorik");
  dbo
    .collection("Siswa")
    .aggregate([
      {
        $lookup: {
          from: "Kelas",
          localField: "kode_kelas",
          foreignField: "kode_kelas",
          as: "hasil_data_kelas",
        },
      },
      {
        $lookup: {
          from: "Mapel",
          localField: "kode_mapel",
          foreignField: "kode_mapel",
          as: "hasil_data_mapel",
        },
      },
      {
        $lookup: {
          from: "Nilai",
          localField: "kode_mapel",
          foreignField: "kode_mapel",
          as: "hasil_data_nilai",
        },
      },
    ])
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
      db.close();
    });
});
