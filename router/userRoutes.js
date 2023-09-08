const { login, register } = require("../controller/userController")
const {validate} = require("../middleware/userMiddleware")

const userRoutes = require("express").Router()


//using Routing level Middleware
userRoutes.get("/login/:age",validate, login)
userRoutes.get("/register", register)

module.exports = userRoutes