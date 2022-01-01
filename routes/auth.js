const router = require("express").Router();
const User = require("../models/User");
const joi = require("@hapi/joi")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

// registration validation schema
const schema = joi.object({
  name: joi.string().min(6).required(),
  email: joi.string().email().required().min(6),
  password: joi.string().min(6).required(),
  role: joi.string().valid("Buyer").valid("Seller").required()
})


router.post('/register', async (req, res) => {

  // validate
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // check if already regestered
  if (await User.findOne({ email: req.body.email })) {
    return res.status(400).send('user already exists');
  }

  // hash password
  const hasher = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, hasher)

  // create model
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role
  })

  try {
    await user.save();
  } catch (err) {
    res.status(400).send(err);
  }

});


// login
router.post('/login', async (req, res) => {
  // check if user exists
  const user = await User.findOne({ email: req.body.email })
  if (!user) {
    return res.status(400).send("Email or Password is incorrect")
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send("Email or Password is incorrect")
  }

  // create and assign token
  const token = jwt.sign({
    name: user.name,
    email: user.email,
    _id: user._id,
    role: user.role
  }, process.env.TOKEN_SECRET, { expiresIn: 3600 })
  res.send({ token: token })
})
module.exports = router;