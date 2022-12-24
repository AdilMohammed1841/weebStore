const schema = require('../schema/schema');

function postMedia(body){
    console.log(body.media);
    if(body.media){
        schema.insertOne(body.media).then(response => console.log(response))
    }
}

function getMedia(){
    schema.find().pretty();
}   

module.exports = { postMedia, getMedia }