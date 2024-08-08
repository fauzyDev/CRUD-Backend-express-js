import express from "express"
import body from "body-parser"
import { database } from "./connection/database.js"
import { response } from "./res/response.js"
const app = express()
const port = 3000

app.use(body.json())

// app.get('/', (req, res) => {
//     const sql = "SELECT * FROM tbl_mahasiswa"
//     database.query(sql, (error, succes) => {
//     if (error) {
//       return res.status(500).json({
//         status: "error",
//         message: "Gagal mengambil data dari"
//       })
//     } 
//     response(200, succes, "data berhasil di ambil", res)
//   })
// })

app.get('/find', (req, res) => {
  database.query(`SELECT nama_lengkap FROM tbl_mahasiswa WHERE nim = ${req.query.nim}`, (error, succes) => {
    response(200, succes, "data berhasil di ambil", res)
  })
})

app.put('/update', (req, res) => {
  console.log({ data: req.body })
  res.send('update berhasil')
})

const data = [
  {
    user: {
      nama: "sandi",
      umur: "20",
      alamat: "ciamis",
    }
  }
]

app.get('/', (req, res) => {
  res.status(200).json( { message: 'api ready'})
})

app.get('api/data', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Berjalan pada port ${port}`)
})