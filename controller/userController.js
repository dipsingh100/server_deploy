
const register = (req, res) => {
    res.send("You are registered")
}

const login = (req, res) => {
    console.log("Routing level Middleware")
    res.send("User Logged in")
}

module.exports = { register, login }