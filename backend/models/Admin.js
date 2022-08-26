const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true
  },
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  isBoss: {
    type: Boolean,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('admins', AdminSchema)