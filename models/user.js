const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    singleCorrect: [{
        number: {
            type: String,
            trim: true
        },
        answer: {
            type: String,
            trim: true
        }
    }],
    multipleCorrect: [{
        number: {
            type: String,
            trim: true
        },
        answer: {
            type: String,
            trim: true
        }
    }]
})



const User = new mongoose.model('User', postSchema)

module.exports = User