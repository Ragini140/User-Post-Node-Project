const { USER } = require('../models/index');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.userRegister = async (req, res) => {
  try {    
    const { body: { email, password }} = req;
    const salt = 10;

    //validate Email Id
    const isExist = await USER.findOne({ email });    
    if (isExist) return res.send({ status: 422, message: "Email Already Exist" });

    //password Incrypt
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;

    //create user
    const addedUser = await USER.create(req.body);
    return res.send({ status: 200, message: "User Created Successfully", data: addedUser});
  } catch (error) {
    console.log(error);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate Email Id
    const isExist = await USER.findOne({ email });
    if (!isExist) return res.send({ status: 422, message: "Email Id not found" });

    //verify password
    const verifyPassword = await bcrypt.compare(password, isExist.password);
    if (!verifyPassword) return res.send({ status: 422, message: "Invalid Password" });

    //generate token
    const token = await jwt.sign({ id: isExist._id, email: isExist.email }, process.env.SECRET_KEY, { expiresIn: '1h' } );
    return res.send({ status: 200, message: "Login Successfully", data: token });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const { user } = req;
    //find user profile
    const userData = await USER.findOne({ _id: user.id },{_id: 1, user_name: 1, email: 1, createdAt:1}).lean();
    return res.send({ status: 200, message: "User Fetched Successfully", data: userData });
 } catch (error) {
    console.log(error);
  }
};