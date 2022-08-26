const express = require('express')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Admin = require('../models/Admin')
const verifyToken = require('../middleware/auth')

// @route GET api/admins
// @desc Get list Admin
// @access Public
router.get('/', async (req, res) => {
  const { search, page } = req.query

  try {
    let filter = {}
    if (search) {
      let filterOption = {
        $regex: search || '',
        $options: "i"
      }
      filter = {
        $or: [
          {
            name: filterOption
          },
          {
            username: filterOption
          },
          {
            email: filterOption
          },
        ]
      }
    }

    const total = Admin.count
    const perPage = 10
    const jobs = await Admin.find(filter, { password: 0 }).skip((+page - 1) * perPage).limit(perPage)

    res.status(200).json({
      success: true,
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
    const admin = await Admin.findOne({ id: id }, { _id: 0, password: 0 })
    if (!admin)
      return res.status(401).json({
        success: false,
        message: 'Admin not found'
      })
    
    res.status(200).json({
      success: true,
      admin
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route POST api/admins/create
// @desc Create new admin
// @access Private, Permission (isBoss = true)
router.post('/create', verifyToken, async (req, res) => {
  const { username, password, name, email, isBoss } = req.body

  // Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Missing username and/or password' })

  // Check Admin has permission to create a new admin
  const adminCreate = await Admin.findOne({ _id: req.adminId })
  if (!adminCreate || !adminCreate.isBoss) return res.status(401).json({
    success: false,
    message: 'Access Permission Denied'
  })

  try {
    // Check for existing admin
    const admin = await Admin.findOne({ username })

    if (admin)
      return res
        .status(400)
        .json({ success: false, message: 'Username already taken' })

    // All good
    const count = (await Admin.count()).toString()
    const newId = +count <= 0 ? 1 : (+count + 1)
    const hashedPassword = await argon2.hash(password)
    const newUser = new Admin({
      id: newId,
      username, name, email,
      password: hashedPassword,
      isBoss: isBoss || false
    })
    await newUser.save()

    // Return token
    // const accessToken = jwt.sign(
    //   { adminId: newUser._id },
    //   process.env.ACCESS_TOKEN_SECRET
    // )

    res.json({
      success: true,
      message: 'New Admin created successfully',
      newUser
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

// @route PUT api/admins/update
// @desc Update admin
// @access Private, Permission? (isBoss = true)
router.put('/update/:id', verifyToken, async (req, res) => {
  const { username, password, name, email, isBoss } = req.body

  // Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: 'Missing username and/or password' })

  // Check Admin need permission to update admin has isBoss = true 
  if (isBoss) {
    const adminUpdate = await Admin.findOne({ _id: req.adminId })
    if (!adminUpdate || !adminUpdate.isBoss) return res.status(401).json({
      success: false,
      message: 'Access Permission Denied'
    })
  }

  try {
    const hashedPassword = await argon2.hash(password)
    let updateAdmin = {
      id: req.params.id,
      username, name, email,
      password: hashedPassword,
      isBoss: isBoss || false
    }

    const adminUpdateConditions = {
      id: req.params.id,
      admin: req.adminId
    }
    updateAdmin = await Admin.findOneAndUpdate(adminUpdateConditions, updateAdmin, { new: true })

    // User not authorised to update post or post not found
    if (!updateAdmin)
      return res.status(401).json({
        success: false,
        message: 'Admin not found or Admin not authorised'
      })

    res.json({
      success: true,
      message: 'Admin updated successfully',
      admin: updateAdmin
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

// @route POST api/admins/login
// @desc User login
// @access Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Simple validation
  if (!username || !password) return res.status(400).json({
    success: false,
    message: "Missing username/password"
  })

  try {
    // Check existing admin
    const admin = await Admin.findOne({ username })
    if (!admin)
      return res.status(400).json({
        success: false,
        message: "Invalid username or password"
      })

    const passwordValid = await argon2.verify(admin.password, password)
    if (!passwordValid) return res.status(400).json({
      success: false,
      message: "Invalid username or password"
    })

    const accessToken = jwt.sign({ adminId: admin._id }, process.env.ACCESS_TOKEN_SECRET)

    res.json({
      success: true,
      message: "Admin logged in successfully",
      accessToken
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route /api/admins/delete/:id
// @desc Delete Admin
// @access Private, Permission (isBoss = true)

router.delete('/delete/:id', verifyToken, async (req, res) => {
  // Check Admin has permission to delete admin
  const adminDeleting = await Admin.findOne({ _id: req.adminId })
  if (!adminDeleting || !adminDeleting.isBoss) return res.status(401).json({
    success: false,
    message: 'Access Permission Denied'
  })

  try {
    const adminDeleteCondition = { id: req.params.id, admin: req.adminId }
    const deletedAdmin = await Admin.findOneAndDelete(adminDeleteCondition)

    // User not authorised or post not found
    if (!deletedAdmin)
      return res.status(401).json({
        success: false,
        message: 'Admin not found or Admin not authorised'
      })

    res.json({ success: true, job: deletedAdmin })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
})

module.exports = router