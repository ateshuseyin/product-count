import axios from 'axios';

function getJson(url) {
  return axios.get(url).then((response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  });
}

function postJson(url, body) {
  return axios.post(url, body).then((response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
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

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
const updateRequest = (barcode) => ({
  type: UPDATE_PRODUCT_REQUEST,
  barcode
});

export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
const updateSuccess = (barcode) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  barcode
});

export const UPDATE_PRODUCT_FAILED = 'UPDATE_PRODUCT_FAILED';
const updateFailed = (barcode, error) => ({
  type: UPDATE_PRODUCT_FAILED,
  barcode,
  error
});

export const updateProduct = (barcode, count) => (dispatch) => {
  dispatch(updateRequest(barcode));
  postJson('/api/product/' + barcode, {quantity: count}).then(
    () => dispatch(updateSuccess(barcode)),
    (error) => dispatch(updateFailed(barcode, error))
  );
};

export const BACK_TO_SEARCH = 'BACK_TO_SEARCH';
export const backToSearch = () => ({
  type: BACK_TO_SEARCH
});