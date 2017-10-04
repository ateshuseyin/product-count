export const SEARCH = 'SEARCH';
export const search = (barcode) => ({
  type: SEARCH,
  barcode
});

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = (productId, count) => ({
  type: UPDATE_PRODUCT,
  productId,
  count
});