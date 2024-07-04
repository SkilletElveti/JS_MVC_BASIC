const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.status(200).json({ message: "update Info"})
})

router.get("/updateWithId/:id", (req,res) => {
    res.status(200).json({ message: "Update with ID" }) 
})

module.exports = router