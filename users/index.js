const express = require('express')
const router = express.Router()
const path = require("path");

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req, res)=>{
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)
})

router.get('/:id', function (req, res) {
    const id = req.params.id
    res.sendFile(`${basePath}/users.html`);
    console.log(`Estamos procurando o usuário ${id}`);
});

module.exports = router