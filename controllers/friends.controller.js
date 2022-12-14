const friends = require('../modules/friends.module')

function postFriend(req, res) {
    if (!req.body.name) { // si el .name no existe
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(newFriend)
    res.json(newFriend)
}

function getFriends(req, res) {
    res.json(friends)
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId] // el id coincide con el index en este caso
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exists'
        })
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}