let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let redis = require('redis')
let  client = require('redis').createClient(process.env.REDIS_URL);

// define routes
let routes = require('./Routes/api')

// Set Port

// Init app
let app = express()
app.listen(process.env.PORT || 3000 ,function(){
    console.log("up and running on port "+process.env.PORT);
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



module.exports = app
