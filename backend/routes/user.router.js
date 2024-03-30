
const express = require("express")



const UserRouter = express.Router()

const { handleUserRegister, handleUserLogin, handleUsers } = require("../controller/userLogin")
const { auth } = require("../middleware/auth.middleware")

UserRouter.post("/register", handleUserRegister)
UserRouter.post("/login", handleUserLogin)
UserRouter.get("/",auth, handleUsers)


module.exports = {
  UserRouter
}