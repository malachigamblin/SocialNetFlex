const { Thought, User } = require('../models')

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v',
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((e) => {
            console.log(e)
            res.sendStatus(400)
        })
    }
}