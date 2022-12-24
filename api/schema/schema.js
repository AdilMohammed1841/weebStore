const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {type:Number, required: false},
    media: {type:Buffer, required: false}
})

module.exports = mongoose.model('ANIME_Collection',Schema)