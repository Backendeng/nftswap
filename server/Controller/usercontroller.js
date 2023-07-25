const User = require("../model/userDB");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserRegister = async (req, res) => {
  console.log("register: ", req.body);
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: "User already exists" });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = {
    email,
    password: hashedPassword,
  };

  const result = await User.create(newUser);

  res.json({ message: "User registered successfully" });
};

const UserLogin = async (req, res) => {
  try{
    // console.log("login: ", req.body);
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invaild password" });
    }
    const token = jwt.sign({userId: user._id}, "bear");
    res.json({token});
  } catch (error) {
    res.status(500).json({message: "An error occurred"})
  }
  // res.cookie("jwt", token)
  // res.status(500).json("jwt", token);
};

module.exports = { UserLogin, UserRegister };
