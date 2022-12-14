function getMessages(req, res) {
    res.send('Get messages')
}

function postMessages(req, res) {
    res.send('Post messages')
}

module.exports = {
    getMessages,
    postMessages
}