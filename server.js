const express = require('express')

// ROUTER files
const friendRouter = require('./routes/friends.router')
const messageRouter = require('./routes/messages.router')

const app = express()

const port = process.env.PORT || 3001;

// MIDDLEWARE
app.use((req, res, next) => {
    const start = Date.now() // Comienzo del conteo
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

app.use(express.json())

app.use('/friends', friendRouter) // mouting router middleware at /friends path
app.use('/messages', messageRouter) // mouting router middleware at /messages path

// https://expressjs.com/es/4x/api.html#app.listen
app.listen(port, () => console.log(`Listen on port ${PORT}`))