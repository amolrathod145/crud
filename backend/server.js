const express = require('express')
const db = require('./config/db')
const cors = require("cors")
const env = require("dotenv")
env.config({ path: "./config/.env" })
const user = require('./router/userRouter')
db()
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/user", user)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}!`))