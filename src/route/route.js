const router = require('express').Router()
const {registerAdmin,login} = require("../controller/adminController")

router.post("/register",registerAdmin)
router.post("/login",login)

router.all("/*", async (req,res) => {
    return res.status(404).send({message:"Page Not Found."})
})

module.exports = router