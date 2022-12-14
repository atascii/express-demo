const express = require('express')

const friendsController = require('../controllers/friends.controller')

// ROUTER
// https://expressjs.com/es/4x/api.html#express.router
const friendRouter = express.Router()

// MIDDLEWARE
// Custom middleware only apply to friendRouter !
friendRouter.use((req,res,next) => {
    console.log('Custom middleware for friendRouter!')
    console.log(`ip address: ${req.ip}`)
    next()
})

friendRouter.post('/', friendsController.postFriend)
friendRouter.get('/', friendsController.getFriends)
friendRouter.get('/:friendId', friendsController.getFriend)

module.exports = friendRouter