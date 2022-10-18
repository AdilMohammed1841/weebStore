const express = require('express');
var router = express.Router();
const mediaService = require('../services/getMedia')

router.post('/', (req, res)=>{
    let body = req.body;
    try {
      mediaService.postMedia(body);
      res.send()          
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;