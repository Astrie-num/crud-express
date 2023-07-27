const express = require('express')
const uuid = require('uuid')

const router = express.Router()
const users = require("../../Users");



//reading users


router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req,res) => {
    const foundUsers = users.some(user => user.id === parseInt(req.params.id));

    if(foundUsers){
        
        res.json(foundUsers.filter(user => user.id === parseInt(req.params.id)));
    }

    else {
       return res.sendStatus(400);
    }

});


//adding new users


router.post('/', (req, res) => {
    const newUser = {
        id : uuid (v4),
        name : newUser.body.name,
        email : newUser.body.email

    }

    if(!newUser.name || !newUser.email) {
        res.sendStatus(400);
    }

    users.push(newUser)
        res.json(users);

})



//updating users

module.exports =  router

