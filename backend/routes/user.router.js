
const express = require("express")

const { UserModel } = require("../model/user.model")
const UserRouter = express.Router()

const { handleUserRegister, handleUserLogin } = require("../controller/userLogin")

UserRouter.post("/register", handleUserRegister)

UserRouter.post("/login", handleUserLogin)


module.exports = {
  UserRouter
}