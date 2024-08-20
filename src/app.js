import express from "express"
import body from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import { errorHandler } from "./middleware/error.js"
import { router } from "./routes/routes.js"

dotenv.config()

const app = express()
const port = 5000

app.use(body.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API V1 Ready"
  })
})

app.use('/', router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Berjalan pada port ${port}`)
})