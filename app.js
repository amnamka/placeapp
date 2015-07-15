//Dependencies
var express = require('express'),
    router = express.Router(),
    request = require('request'),
    fs = require('fs'),
    app = express();

//Configs

app.route('/')

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'jade');

app.get('/', function(req, res){
  var url = 'http://api.placester.com/api/v2.1/listings.json?api_key=3eb444f8869cb88bbc349586573aabbb84a316d7';
  request(url, function(err, resp, body){
    Data = JSON.parse(body);
    //Pass the results to client side
    //res.send(Data.listings);
    res.render('index', { 'Data' : Data })
  });
});
app.get('/data', function(req, res) {
    res.json(Data);
});

//Temp - local file
// var url = 'data.json',
//     contents = fs.readFileSync(url, 'utf8')
// app.get('/', function(req, res){
//   request(url, function(err, resp){
//     res.render('index', { "Data": JSON.parse(contents) })
//   });
// });
// app.get('/data', function(req, res) {
//     res.json(JSON.parse(contents));
// });

//Serve static files
app.use(express.static('public'));

//Start Server
app.listen(app.get('port'), function () {  
  console.log('Express up and listening on port ' + app.get('port'));
});