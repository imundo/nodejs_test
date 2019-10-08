let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let redis = require('redis')
let  client = require('redis').createClient(process.env.REDIS_URL);

// define routes
let routes = require('./Routes/api')

// Set Port
var PORT = process.env.PORT || 4040;
// Init app
let app = express()


//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('PORT'));
});
// instantiate a connection to redis 
client.on('connect', () => {
  console.log('Connected to Redis...')
})

// body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// methodOverride
app.use(methodOverride('_method'))

// Routes Middleware
app.use(routes)

// 404 handler
app.use((req, res) => {
  res.status(404)
  res.send('endpoint not found')
})

// serve application on specified port
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
});

module.exports = app
