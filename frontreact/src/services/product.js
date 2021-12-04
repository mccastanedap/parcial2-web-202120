const DOMAIN = "http://localhost:3001";
const SERVER_API_PRODUCT = `${DOMAIN}/api/products`;

const searchProductsURL = (searchKey) =>
  `${SERVER_API_PRODUCT}?que=${encodeURIComponent(searchKey)}`;

/**
 * Call api for searching products by query
 * @param {*} query
 */
const getProductsService = (query) => {
  return fetch(searchProductsURL(query)).then(getJSON);
};

const getJSON = (response) => response.json();

export { getProductsService };
