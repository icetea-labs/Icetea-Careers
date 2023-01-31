require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const jobRouter = require('./routes/job')

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@icetea-careers.mbp0vwv.mongodb.net/?retryWrites=true&w=majority`)
    // await mongoose.connect("mongodb://127.0.0.1:27017/?retryWrites=true&w=majority")
    console.log('MongoDB connected')
  } catch (error) {
    console.log('Connect ERROR' + error.message)
    process.exit(1)
  }
}

connectDB()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.use('/api/admins', adminRouter)
app.use('/api/jobs', jobRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('first request from port ' + PORT))