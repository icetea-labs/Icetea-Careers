const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  id: {
    type: Number,
    require: true,
    unique: true
  },
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
    // require: true,
    // enum: ['intern', 'junior', 'middle', 'senior', 'leader']
  },
  location: {
    type: String,
    require: true,
    enum: ['ha-noi', 'ho-chi-minh', 'remote']
  },
  description: {
    require: true,
    type: String,
  },
  requirements: {
    require: true,
    type: String,
  },
  benefits: {
    require: true,
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