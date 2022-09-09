const express = require('express')
const Job = require('../models/Job')
const argon2 = require('argon2')
const router = express.Router()

const verifyToken = require('../middleware/auth')

// @route GET api/jobs
// @desc Get list Job Detail
// @access Public
router.get('/', async (req, res) => {
  const { search, display, category, level, page = 1, perPage = 10 } = req.query

  try {
    let filter = {}
    if (display === 'true' || display === 'false') {
      filter.display = display
    }
    if (category) {
      filter.category = category
    }
    if (level) {
      filter.level = {
        $in: level.split(';')
      }
    }
    filter.title = {
      $regex: search || '',
      $options: "i"
    }

    const jobs = await Job.find(filter, { _id: 0, }).sort({ createAt: -1 })
    let start = (+page - 1) * perPage
    const jobsResult = jobs && jobs.slice(start, start + perPage)
    let total = jobs && jobs.length

    res.status(200).json({
      success: true,
      data: {
        data: jobsResult,
        page: +page,
        total,
        perPage: +perPage,
        lastPage: Math.ceil(total / +perPage)
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route GET api/jobs/:id
// @desc Get Job Detail by Id
// @access Public
router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const job = await Job.findOne({ id: id }, { _id: 0 })
    if (!job)
      return res.status(404).json({
        success: false,
        message: 'Job Detail not found'
      })

    res.status(200).json({
      success: true,
      data: job
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route POST api/jobs/create
// @desc Create Job Detail
// @access Private
router.post('/create', verifyToken, async (req, res) => {
  const { display, title, category, level, location, description, requirements, benefits } = req.body

  if (!title || !category || !location || !description || !requirements || !benefits)
    return res.status(400).json({
      success: false,
      message: "Missing required field"
    })

  try {
    const lastJob = await Job.find().sort({ $natural: -1 }).limit(1)
    const lastId = (lastJob && lastJob.length) ? +lastJob[0]?.id : 0
    const newId = lastId + 1
    const newJob = new Job({
      id: newId,
      display: typeof (display) === 'boolean' ? display : true,
      benefits, category, description, level, location, requirements, title,
      createBy: req.adminId
    })

    await newJob.save()

    res.json({
      success: true,
      message: 'Created successfully',
      data: newJob
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route PUT api/jobs/update/:id
// @desc Update Job Detail
// @access Private
router.put('/update/:id', verifyToken, async (req, res) => {
  const { display, title, category, level, location, description, requirements, benefits } = req.body

  if (!title || !category || !level || !location)
    return res.status(400).json({
      success: false,
      message: "Missing required field"
    })

  try {
    let updatedJob = {
      id: req.params.id,
      display: typeof (display) === 'boolean' ? display : true,
      benefits, category, description, level, location, requirements, title, createBy: req.adminId
    }
    const jobUpdateConditions = {
      id: req.params.id,
      admin: req.adminId
    }
    updatedJob = await Job.findOneAndUpdate(jobUpdateConditions, updatedJob, { new: true })

    // User not authorised to update post or post not found
    if (!updatedJob)
      return res.status(404).json({
        success: false,
        message: 'Job not found or Admin not authorised'
      })

    res.json({
      success: true,
      message: 'Updated successfully',
      data: updatedJob
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route DELETE api/jobs/delete/:id
// @desc Delete post
// @access Private
router.delete('/delete/:id', verifyToken, async (req, res) => {
  try {
    const jobDeleteCondition = { id: req.params.id, admin: req.adminId }
    const deletedJob = await Job.findOneAndDelete(jobDeleteCondition)

    // User not authorised or post not found
    if (!deletedJob)
      return res.status(404).json({
        success: false,
        message: 'Job not found or Admin not authorised'
      })

    res.json({ success: true, data: deletedJob })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router