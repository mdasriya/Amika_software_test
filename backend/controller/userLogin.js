const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const handleUserRegister = (async (req, res) => {
    const { name, email, pass } = req.body
    try {
        let reqData = await UserModel.find({ email });
        if (reqData.length > 0) {
            res.json({ msg: "You are already register" ,state:false})
        } else {
            bcrypt.hash(pass, 5, async (err, hash) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ msg: "password not hash", state:false })
                } else {
                    const user = new UserModel({ name, email, pass: hash })
                    await user.save()
                    res.status(200).json({ msg: "User has been created", userRegister: req.body, state:true })
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
})
const handleUserLogin = (async (req, res) => {
    const { email, pass } = req.body;
    try {
      const reqdata = await UserModel.findOne({ email })
      if (reqdata) {
        bcrypt.compare(pass, reqdata.pass, (err, result) => {
          if (result) {
            const token = jwt.sign({ UserId: reqdata._id, user: reqdata.name }, "masai")
            res.status(200).json({ msg: "user Logged In Success!!!", token: token })
          } else {
            res.status(200).json({ msg: "Wrong credential" })
          }
        })
      } else {
        res.status(200).json({ msg: "register first" })
      }
    } catch (error) {
      console.log(error);
    }
  
  })

  const handleUsers = async(req,res) =>{
    // users get code
  try {
      const users = await UserModel.find()
      res.send(users)
  } catch (error) {
      console.log(error);
  }

  }



module.exports = {
    handleUserRegister,handleUserLogin,handleUsers
}


