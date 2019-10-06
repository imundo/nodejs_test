'use strict';


/**
 * Get a product by ID
 *
 * productId String The ID of the product to get.
 * returns Product
 **/
exports.getProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "longDescription" : "longDescription",
  "parentProductID" : "parentProductID",
  "simple" : {
    "isMarketplaceProduct" : true,
    "lists" : {
      "outOfStockList" : {
        "blacklist" : true
      },
      "promotion" : {
        "badge" : true,
        "stock" : true
      }
    },
    "isUnavailable" : true,
    "isOutOfStock" : true
  },
  "colors" : [ {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  }, {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  } ],
  "productString" : "productString",
  "xCatEntryCategory" : "xCatEntryCategory",
  "shipping" : {
    "cashOnDelivery" : true,
    "rCercano" : true,
    "rTienda" : true,
    "dDomicilio" : true
  },
  "variations" : {
    "key" : {
      "images" : [ "images", "images" ],
      "thumbnail" : "thumbnail",
      "partNumber" : "partNumber",
      "fullImage" : "fullImage",
      "uniqueID" : "uniqueID"
    }
  },
  "prices" : {
    "discountPercentage" : 5,
    "formattedCardPrice" : "formattedCardPrice",
    "formattedDiscount" : "formattedDiscount",
    "offerPrice" : 0,
    "cardPrice" : 1,
    "discount" : 5,
    "formattedOfferPrice" : "formattedOfferPrice",
    "ripleyPuntos" : 2,
    "$$cache" : {
      "created" : 7,
      "cached" : true
    },
    "formattedListPrice" : "formattedListPrice",
    "listPrice" : 6
  },
  "thumbnailImage" : "thumbnailImage",
  "fullImage" : "fullImage",
  "uniqueID" : "uniqueID",
  "isMarketplaceProduct" : true,
  "images" : [ "images", "images" ],
  "marketplace" : {
    "shopName" : "shopName",
    "shopId" : 9
  },
  "shortDescription" : "shortDescription",
  "url" : "url",
  "definingAttributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  } ],
  "SKUs" : [ {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  }, {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  } ],
  "single" : true,
  "warranties" : [ {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  }, {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  } ],
  "name" : "name",
  "partNumber" : "partNumber",
  "attributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  } ],
  "locals" : {
    "outOfStockList" : {
      "xCatEntryQuantity" : true,
      "blacklist" : true
    },
    "unavailableList" : {
      "blacklist" : true
    },
    "promotion" : {
      "badge" : true,
      "stock" : true
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a product by part number
 *
 * partNumber String The part number of the product to get.
 * returns Product
 **/
exports.getProductByPartNumber = function(partNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "longDescription" : "longDescription",
  "parentProductID" : "parentProductID",
  "simple" : {
    "isMarketplaceProduct" : true,
    "lists" : {
      "outOfStockList" : {
        "blacklist" : true
      },
      "promotion" : {
        "badge" : true,
        "stock" : true
      }
    },
    "isUnavailable" : true,
    "isOutOfStock" : true
  },
  "colors" : [ {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  }, {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  } ],
  "productString" : "productString",
  "xCatEntryCategory" : "xCatEntryCategory",
  "shipping" : {
    "cashOnDelivery" : true,
    "rCercano" : true,
    "rTienda" : true,
    "dDomicilio" : true
  },
  "variations" : {
    "key" : {
      "images" : [ "images", "images" ],
      "thumbnail" : "thumbnail",
      "partNumber" : "partNumber",
      "fullImage" : "fullImage",
      "uniqueID" : "uniqueID"
    }
  },
  "prices" : {
    "discountPercentage" : 5,
    "formattedCardPrice" : "formattedCardPrice",
    "formattedDiscount" : "formattedDiscount",
    "offerPrice" : 0,
    "cardPrice" : 1,
    "discount" : 5,
    "formattedOfferPrice" : "formattedOfferPrice",
    "ripleyPuntos" : 2,
    "$$cache" : {
      "created" : 7,
      "cached" : true
    },
    "formattedListPrice" : "formattedListPrice",
    "listPrice" : 6
  },
  "thumbnailImage" : "thumbnailImage",
  "fullImage" : "fullImage",
  "uniqueID" : "uniqueID",
  "isMarketplaceProduct" : true,
  "images" : [ "images", "images" ],
  "marketplace" : {
    "shopName" : "shopName",
    "shopId" : 9
  },
  "shortDescription" : "shortDescription",
  "url" : "url",
  "definingAttributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  } ],
  "SKUs" : [ {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  }, {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  } ],
  "single" : true,
  "warranties" : [ {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  }, {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  } ],
  "name" : "name",
  "partNumber" : "partNumber",
  "attributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  } ],
  "locals" : {
    "outOfStockList" : {
      "xCatEntryQuantity" : true,
      "blacklist" : true
    },
    "unavailableList" : {
      "blacklist" : true
    },
    "promotion" : {
      "badge" : true,
      "stock" : true
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of products by part numbers
 *
 * partNumbers String The part numbers of the products to get, separated by comma.
 * format String The format of the response. (optional)
 * returns List
 **/
exports.getProductsByPartNumbers = function(partNumbers,format) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "longDescription" : "longDescription",
  "parentProductID" : "parentProductID",
  "simple" : {
    "isMarketplaceProduct" : true,
    "lists" : {
      "outOfStockList" : {
        "blacklist" : true
      },
      "promotion" : {
        "badge" : true,
        "stock" : true
      }
    },
    "isUnavailable" : true,
    "isOutOfStock" : true
  },
  "colors" : [ {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  }, {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  } ],
  "productString" : "productString",
  "xCatEntryCategory" : "xCatEntryCategory",
  "shipping" : {
    "cashOnDelivery" : true,
    "rCercano" : true,
    "rTienda" : true,
    "dDomicilio" : true
  },
  "variations" : {
    "key" : {
      "images" : [ "images", "images" ],
      "thumbnail" : "thumbnail",
      "partNumber" : "partNumber",
      "fullImage" : "fullImage",
      "uniqueID" : "uniqueID"
    }
  },
  "prices" : {
    "discountPercentage" : 5,
    "formattedCardPrice" : "formattedCardPrice",
    "formattedDiscount" : "formattedDiscount",
    "offerPrice" : 0,
    "cardPrice" : 1,
    "discount" : 5,
    "formattedOfferPrice" : "formattedOfferPrice",
    "ripleyPuntos" : 2,
    "$$cache" : {
      "created" : 7,
      "cached" : true
    },
    "formattedListPrice" : "formattedListPrice",
    "listPrice" : 6
  },
  "thumbnailImage" : "thumbnailImage",
  "fullImage" : "fullImage",
  "uniqueID" : "uniqueID",
  "isMarketplaceProduct" : true,
  "images" : [ "images", "images" ],
  "marketplace" : {
    "shopName" : "shopName",
    "shopId" : 9
  },
  "shortDescription" : "shortDescription",
  "url" : "url",
  "definingAttributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  } ],
  "SKUs" : [ {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  }, {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  } ],
  "single" : true,
  "warranties" : [ {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  }, {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  } ],
  "name" : "name",
  "partNumber" : "partNumber",
  "attributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  } ],
  "locals" : {
    "outOfStockList" : {
      "xCatEntryQuantity" : true,
      "blacklist" : true
    },
    "unavailableList" : {
      "blacklist" : true
    },
    "promotion" : {
      "badge" : true,
      "stock" : true
    }
  }
}, {
  "longDescription" : "longDescription",
  "parentProductID" : "parentProductID",
  "simple" : {
    "isMarketplaceProduct" : true,
    "lists" : {
      "outOfStockList" : {
        "blacklist" : true
      },
      "promotion" : {
        "badge" : true,
        "stock" : true
      }
    },
    "isUnavailable" : true,
    "isOutOfStock" : true
  },
  "colors" : [ {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  }, {
    "name" : "name",
    "hex" : "hex",
    "slug" : "slug",
    "uniqueID" : "uniqueID"
  } ],
  "productString" : "productString",
  "xCatEntryCategory" : "xCatEntryCategory",
  "shipping" : {
    "cashOnDelivery" : true,
    "rCercano" : true,
    "rTienda" : true,
    "dDomicilio" : true
  },
  "variations" : {
    "key" : {
      "images" : [ "images", "images" ],
      "thumbnail" : "thumbnail",
      "partNumber" : "partNumber",
      "fullImage" : "fullImage",
      "uniqueID" : "uniqueID"
    }
  },
  "prices" : {
    "discountPercentage" : 5,
    "formattedCardPrice" : "formattedCardPrice",
    "formattedDiscount" : "formattedDiscount",
    "offerPrice" : 0,
    "cardPrice" : 1,
    "discount" : 5,
    "formattedOfferPrice" : "formattedOfferPrice",
    "ripleyPuntos" : 2,
    "$$cache" : {
      "created" : 7,
      "cached" : true
    },
    "formattedListPrice" : "formattedListPrice",
    "listPrice" : 6
  },
  "thumbnailImage" : "thumbnailImage",
  "fullImage" : "fullImage",
  "uniqueID" : "uniqueID",
  "isMarketplaceProduct" : true,
  "images" : [ "images", "images" ],
  "marketplace" : {
    "shopName" : "shopName",
    "shopId" : 9
  },
  "shortDescription" : "shortDescription",
  "url" : "url",
  "definingAttributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "values" : [ {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    }, {
      "identifier" : "identifier",
      "values" : "values",
      "extendedValue" : [ {
        "value" : "value",
        "key" : "key"
      }, {
        "value" : "value",
        "key" : "key"
      } ],
      "uniqueID" : "uniqueID",
      "slug" : "slug"
    } ],
    "displayable" : true,
    "name" : "name",
    "id" : "id"
  } ],
  "SKUs" : [ {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  }, {
    "ineligible" : true,
    "Price" : [ {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    }, {
      "SKUPriceUsage" : "SKUPriceUsage",
      "SKUPriceDescription" : "SKUPriceDescription",
      "SKUPriceValue" : "SKUPriceValue"
    } ],
    "Attributes" : [ {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    }, {
      "identifier" : "identifier",
      "usage" : "usage",
      "Values" : [ {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      }, {
        "identifier" : "identifier",
        "values" : "values",
        "uniqueID" : "uniqueID"
      } ],
      "name" : "name",
      "displayable" : "displayable",
      "comparable" : "comparable",
      "searchable" : "searchable",
      "uniqueID" : "uniqueID"
    } ],
    "SKUUniqueID" : "SKUUniqueID",
    "partNumber" : "partNumber"
  } ],
  "single" : true,
  "warranties" : [ {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  }, {
    "thumbnail" : "thumbnail",
    "quantity" : "quantity",
    "Price" : [ {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    }, {
      "formattedPriceValue" : "formattedPriceValue",
      "priceUsage" : "priceUsage",
      "priceValue" : 3
    } ],
    "name" : "name",
    "partNumber" : "partNumber",
    "shortDescription" : "shortDescription",
    "type" : "type",
    "uniqueID" : "uniqueID"
  } ],
  "name" : "name",
  "partNumber" : "partNumber",
  "attributes" : [ {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  }, {
    "identifier" : "identifier",
    "usage" : "usage",
    "displayable" : true,
    "name" : "name",
    "id" : "id",
    "value" : "value"
  } ],
  "locals" : {
    "outOfStockList" : {
      "xCatEntryQuantity" : true,
      "blacklist" : true
    },
    "unavailableList" : {
      "blacklist" : true
    },
    "promotion" : {
      "badge" : true,
      "stock" : true
    }
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

