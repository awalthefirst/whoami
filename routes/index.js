var express = require('express');
var router = express.Router();
var userParser = require('ua-parser-js');


/* GET home page. */
router.get('/', function (req, res, next) {

    var info = userParser(req.headers['user-agent']); 
    
    var obj = {
        "ipaddress": req.headers['x-forwarded-for'],
        "language": req.headers['accept-language'].split(',')[0],
        
        "software": info.os.name +' '+info.os.version
    }

    res.json(obj);
});

module.exports = router;
