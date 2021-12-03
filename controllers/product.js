const data = require("../frontreact/src/assets/data");

function getProducts(query) {
  const result = data.filter((product) => {
    return product.name.toLowerCase().includes(query.toLowerCase());
  });
  return result;
}

module.exports = { getProducts };
