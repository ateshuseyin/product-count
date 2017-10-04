function getJson(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response.json();
  });
}

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
const searchRequest = (barcode) => ({
  type: SEARCH_REQUEST,
  barcode
});

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const searchSuccess = (product) => ({
  type: SEARCH_SUCCESS,
  product
});

export const SEARCH_FAILED = 'SEARCH_FAILED';
const searchFailed = (barcode, error) => ({
  type: SEARCH_FAILED,
  barcode,
  error
});

export const search = (barcode) => (dispatch) => {
  dispatch(searchRequest(barcode));
  getJson('/api/product/' + barcode).then(
    (product) => dispatch(searchSuccess(product)),
    (error) => dispatch(searchFailed(barcode, error))
  );
};

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = (productId, count) => ({
  type: UPDATE_PRODUCT,
  productId,
  count
});

export const BACK_TO_SEARCH = 'BACK_TO_SEARCH';
export const backToSearch = () => ({
  type: BACK_TO_SEARCH
});