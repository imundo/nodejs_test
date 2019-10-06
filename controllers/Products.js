'use strict';

var utils = require('../utils/writer.js');
var Products = require('../service/ProductsService');

module.exports.getProductById = function getProductById (req, res, next) {
  var productId = req.swagger.params['productId'].value;
  Products.getProductById(productId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductByPartNumber = function getProductByPartNumber (req, res, next) {
  var partNumber = req.swagger.params['partNumber'].value;
  Products.getProductByPartNumber(partNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProductsByPartNumbers = function getProductsByPartNumbers (req, res, next) {
  var partNumbers = req.swagger.params['partNumbers'].value;
  var format = req.swagger.params['format'].value;
  Products.getProductsByPartNumbers(partNumbers,format)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
