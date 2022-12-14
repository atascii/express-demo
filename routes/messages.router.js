const express = require('express')

const messagesController = require('../controllers/messages.controller')

// ROUTER
// https://expressjs.com/es/4x/api.html#express.router
const messagesRouter = express.Router()

messagesRouter.get('/', messagesController.getMessages)
messagesRouter.post('/', messagesController.postMessages)

module.exports = messagesRouter

