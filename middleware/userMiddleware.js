
const appMiddleware = (req, res, next) => {
    //some conditions to check
    console.log("Application level Middleware");
    next()
}

const validate = (req, res, next) => {
    const { age } = req.params
    if (age >= 18) {
        next()
    } else {
        console.log("Routing level Middleware")
        res.send({ msg: "user not allowed" })
    }
}

module.exports = { validate, appMiddleware }