var express = require("express");
var router = express.Router();
var { getProducts } = require("../controllers/product.js");

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */

router.get("/", function (req, res, next) {
  const que = req.query.que;
  const data = getProducts(que);
  res.send(data);
});

module.exports = router;
