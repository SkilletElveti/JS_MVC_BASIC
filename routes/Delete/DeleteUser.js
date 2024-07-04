const express = require('express')
const router = express.Router()

router.get("/",(req,res) => { 
    res.status(200).json({ message: "Delete normal" })
})

router.get("/deleteWithId/:id", (req,res) => { 
    res.status(200).json({ message: "Delete with ID" })
})

module.exports = router