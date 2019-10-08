let  producto = require('redis').createClient(process.env.REDIS_URL);

exports.get_all_users = (req, res, next) => {
  let return_dataset = []

  producto.keys('*', (err, id) => {
    let multi = producto.multi()
    let keys = Object.keys(id)
    let i = 0

    keys.forEach( (l) => {
      producto.hgetall(id[l], (e, o) => {
        i++
        if (e) {console.log(e)} else {
          temp_data = {'id':id[l],'data':o}
          return_dataset.push(temp_data)
        }

        if (i == keys.length) {
          res.send({users:return_dataset})
        }
      })
    })
  })
}

exports.add_product = (req, res, next) => {
  // post Parameters
  let id = req.body.id
  let partNumber = req.body.partNumber
  let name = req.body.name
  let locals = req.body.locals
  let fullImage = req.body.fullImage
  let shortDescription = req.body.shortDescription
  let parentProductID = req.body.parentProductID
  let xCatEntryCategory = req.body.xCatEntryCategory
  let colors = req.body.colors
  let SKUs = req.body.SKUs
  let isMarketplaceProduct = req.body.isMarketplaceProduct
  let url = req.body.url


  // make id the key and assign the id to the other Parameters
  producto.hmset(id,[
    'partNumber', partNumber,
    'name', name,
    'locals', locals,
    'fullImage', fullImage,
    'shortDescription', shortDescription,
    'parentProductID', parentProductID,
    'xCatEntryCategory', xCatEntryCategory,
    'colors', colors,
    'SKUs', SKUs,
    'isMarketplaceProduct', isMarketplaceProduct,
    'url', url
  ], (err, reply) => {
    if (err) {
      console.log(err)  // callback to log errors
    }

    console.log(reply)  // log success message
    res.send('Producto agregado exitosamente') // response back to the producto
  });
}

exports.delete_product = (req, res, next) => {
  // find key associated with the id and deletes it
  producto.del(req.params.id, (err, reply) => {
    if (err) {
      console.log(err)  // callback incase something goes wrong
    }

    console.log(reply)  // log success message
    res.send('Producto deleted successfully') // response back to the producto
  })
}

exports.get_product = (req, res, next) => {
  // id from url Parameter
  let id = req.params.id

  // get all values associated with the key as id
  producto.hgetall(id, (err, obj) => {
    if (!obj) {
      res.send('Producto does not exist') // if no user is associated with that id/key return this
    } else {
      obj.id = id

      res.send({
        'user': obj // if user is found return details
      })
    }
  })
}


