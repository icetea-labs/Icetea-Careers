require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@icetea-careers.mbp0vwv.mongodb.net/?retryWrites=true&w=majority`)
    console.log('MongoDB connected')
  } catch (error) {
    console.log('Connect ERROR' + error.message)
    process.exit(1)
  }
}

connectDB()

const app = express()

app.get('/', (req, res) => res.send('ha.nguyen'))

const PORT = 5000

app.listen(PORT, () => console.log('first request from port ' + PORT))