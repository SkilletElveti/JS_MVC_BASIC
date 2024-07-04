const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.status(200).json( {message: "Get Test works"} )
})

router.get("/getWithId/:id", (req,res) => { 
    res.status(200).json( {message: "Get with id"} )
})

module.exports = router