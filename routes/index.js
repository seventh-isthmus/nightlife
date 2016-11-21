var express = require('express');
var router = express.Router();
var request = require('request');
var apiKey = require('../apiKey')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/journals/search', function(req, res){

var options = {
url:'http://apis.baidu.com/qunartravel/travellist/travellist',
headers: {"apikey": apiKey}
}
var callback = function(err, response, body){
console.log(body)
}
request(options, callback)
})



module.exports = router;
