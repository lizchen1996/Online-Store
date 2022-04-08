const url = require("url");
const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controller/product")

function handleRequest(req, res) {

  let urlObj = url.parse(req.url, true);
  let method = req.method;

  if (method === 'GET') {
    if (urlObj.pathname === '/') {
      let resultData = getProductList(urlObj.query);
      return resultData;
    } else if (urlObj.pathname === '/') {

    }
  } else if (method === 'POST') {
    if (urlObj.pathname === '/deleteProduct') {
      let resultData = deleteProduct(urlObj.query.id);
      return resultData;
    } else if (urlObj.pathname === '/updateProduct') {
      let resultData = updateProduct(urlObj.query.id, req.body);
      return resultData;
    } else if (urlObj.pathname === '/addProduct') {
      let resultData = updateProduct(req.body);
      return resultData;
    }
  } else if (method === 'DELETE') {
    if (urlObj.pathname === '/') {

    } else if (urlObj.pathname === '/') {

    }
  } else {
    if (urlObj.pathname === '/') {

    } else if (urlObj.pathname === '/') {

    }
  }
}

module.exports = handleRequest;
