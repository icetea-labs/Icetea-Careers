const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  display: {
    type: Boolean,
  },
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
    enum: ['software-development', 'marketing', 'design-art', 'operations']
  },
  level: {
    type: String,
    require: true,
    enum: ['intern', 'junior', 'middle', 'senior', 'leader']
  },
  location: {
    type: String,
    require: true,
    enum: ['ha-noi', 'ho-chiminh', 'remote']
  },
  description: {
    type: String,
  },
  requirements: {
    type: String,
  },
  benefits: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  createBy: {
    type: Schema.Types.ObjectId,
    ref: 'admins'
  }
})

module.exports = mongoose.model('jobs', JobSchema)