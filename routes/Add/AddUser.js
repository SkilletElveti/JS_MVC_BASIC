const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.status(200).json({message:"Add Users"})
})

router.get("/getUser", (req,res) => {
    res.status(200).json({message:"Get Users"})
})

module.exports = router  