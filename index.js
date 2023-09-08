const express = require("express")
const cors = require("cors")
const userRoutes = require("./router/userRoutes")
const { appMiddleware } = require("./middleware/userMiddleware")

const app = express()
app.use(cors(
    {
        "origin": "*"
    }
))


// using Application level Middleware
app.use(appMiddleware)
app.use("/middleware", userRoutes)



app.listen(8000, () => {
    console.log("server is running on http://localhost:8000/")
})