let express = require('express')
let Route = express()
let redis = require('../Controllers/RedisController')

// return instructions
Route.get('/', (req, res, next) => {
  res.send('Node-Redis CRUD Application | check Readme for instructions')
})

// get all Producto
Route.get('/users', redis.get_all_users)

// add a new Producto
Route.post('/Producto/add', redis.add_product)

// delete a user
Route.delete('/Producto/delete/:id', redis.delete_product)

// get a user by Producto
Route.get('/Producto/:id', redis.get_product)

module.exports = Route
