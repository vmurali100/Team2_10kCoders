const express = require('express')
let app = express.Router();
const fs = require('fs')


app.get('/', function (req, res) {
    fs.readFile('./routes/users.json', 'utf8', (err, data) => {
        res.send({ users: JSON.parse(data) });
    })

});

app.post('/createUser', (req, res) => {
    let user = req.body

    fs.readFile('./routes/users.json', 'utf8', (err, data) => {
        let newUsers = JSON.parse(data)
        newUsers.push(user)
        fs.writeFile('./routes/users.json', JSON.stringify(newUsers), () => {
            res.send({ users: newUsers });
        })

    })
})
app.delete('/:id', (req, res) => {
    let id = req.params.id
    fs.readFile('./routes/users.json', 'utf8', (err, data) => {
        let newUsers = JSON.parse(data).filter((user) => user.id != id)

        fs.writeFile('./routes/users.json', JSON.stringify(newUsers), () => {
            res.send({ users: newUsers });

        })
    })

})

app.put('/updateUser/:id', (req, res) => {
    let id = req.params.id
    let user = req.body
    console.log(id)
    console.log(user)
    fs.readFile('./routes/users.json', 'utf8', (err, data) => {
        let newUsers = JSON.parse(data)

        newUsers.forEach((ns, i) => {
            console.log(ns.id == id)
            if (ns.id == id) {
                newUsers[i] = user
            }
        })
        console.log(newUsers)
        fs.writeFile('./routes/users.json', JSON.stringify(newUsers), () => {
            res.send({ msg: "User Updated" });
        })

    })
})
module.exports = app

