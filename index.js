const express = require('express')
const app = express()
app.use(express.json())

const addRoute = require('./routes/Add/AddUser')
const deleteRoute = require('./routes/Delete/DeleteUser')
const getRoute = require('./routes/Get/GetUser')
const updateRoute = require('./routes/Update/UpdateUser')

app.use('/add',addRoute)
app.use('/delete', deleteRoute)
app.use('/get', getRoute)
app.use('/update', updateRoute)

app.get('/getMessage', (req,res) => {
    res.send('Hello world')
})

let users = [
    {
        name: "one",
        id: 1
    }, 
    {
        name: "two",
        id: 2
    },
    {
        name: "three",
        id: 3
    },
    {
        name: "four",
        id: 4
    },
    {
        name: "five",
        id: 5
    },
]

app.get("/users", (req,res) => {
    res.status(200).json(users)
})

app.post("/addUsers", (req,res) => {
    users.push(req.body)
    res.json(users)
})

app.put("/updateUsers", (req,res) => { 
    const nameNew = req.body.newName
    for(let i = 0; i < users.length ; i ++) {
        users[i].name = nameNew
    }
    res.status(200).json(users)
})

app.delete("/delete/:id",(req,res) => { 
    const id = req.params.id 
    let found = false
    for(let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i,1)
            found = true
        }
    } 
    if (found) {
        res.status(200).json(users)
    } else { 
        res.status(404).json({error: "User not found"})
    }
})

app.listen('3001', () => {
    console.log("Server running on port: 3001")
})