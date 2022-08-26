const express = require('express')
const Job = require('../models/Job')
const argon2 = require('argon2')
const router = express.Router()

const verifyToken = require('../middleware/auth')

// @route GET api/jobs
// @desc Get list Job Detail
// @access Private
router.get('/', verifyToken, async (req, res) => {
  const { search, display, category, level, page } = req.query

  try {
    let filter = {}
    if (display === 'true' || display === 'false') {
      filter.display = display
    }
    if (category) {
      filter.category = category
    }
    if (level) {
      filter.level = level
    }
    filter.title = {
      $regex: search
    }

    const total = Job.count
    const perPage = 10
    const jobs = await Job.find(filter).skip((+page - 1) * perPage).limit(perPage)
    res.status(200).json({
      sucess: true,
      data: {
        data: jobs,
        page: +page,
        total,
        perPage,
        lastPage: Math.ceil(total / perPage)
      }
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      sucess: false,
      message: "Internal server error"
    })
  }
})

// @route POST api/jobs/create
// @desc Create Job Detail
// @access Private
router.post('/create', verifyToken, async (req, res) => {
  console.log(req.body)
  const { display, title, category, level, location, description, requirements, benefits } = req.body

  if (!title || !category || !level || !location)
    return res.status(400).json({
      sucess: false,
      message: "Missing required field"
    })

  try {
    const newJob = new Job({
      display: typeof (display) === 'boolean' ? display : true,
      benefits, category, description, level, location, requirements, title, createBy: req.adminId
    })

    await newJob.save()

    res.json({
      sucess: true,
      message: 'Created successfully',
      job: newJob
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      sucess: false,
      message: "Internal server error"
    })
  }
})

// @route PUT api/jobs/update/:id
// @desc Update Job Detail
// @access Private
router.put('/update/:id', verifyToken, async (req, res) => {
  console.log(req.body)
  const { display, title, category, level, location, description, requirements, benefits } = req.body

  if (!title || !category || !level || !location)
    return res.status(400).json({
      sucess: false,
      message: "Missing required field"
    })

  try {
    let updatedJob = {
      display: typeof (display) === 'boolean' ? display : true,
      benefits, category, description, level, location, requirements, title, createBy: req.adminId
    }
    const jobUpdateConditions = {
      _id: req.params.id,
      admin: req.adminId
    }
    updatedJob = await Job.findOneAndUpdate(jobUpdateConditions, updatedJob, { new: true })

    // User not authorised to update post or post not found
    if (!updatedJob)
      return res.status(401).json({
        success: false,
        message: 'Job not found or Admin not authorised'
      })

    res.json({
      sucess: true,
      message: 'Updated successfully',
      job: updatedJob
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      sucess: false,
      message: "Internal server error"
    })
  }
})

// @route DELETE api/jobs/delete/:id
// @desc Delete post
// @access Private
router.delete('/delete/:id', verifyToken, async (req, res) => {
  try {
    const jobDeleteCondition = { _id: req.params.id, admin: req.adminId }
    const deletedJob = await Job.findOneAndDelete(jobDeleteCondition)

    // User not authorised or post not found
    if (!deletedJob)
      return res.status(401).json({
        success: false,
        message: 'Job not found or Admin not authorised'
      })

    res.json({ success: true, job: deletedJob })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router