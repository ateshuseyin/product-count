import {SEARCH_SUCCESS, SEARCH_FAILED} from '../actions';

const initialState = {
  founded: {
    barcode: '',
    partNo: '',
    quantity: 0
  },
  error: {
    message: ''
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        founded: action.product,
        error: {}
      };
    case SEARCH_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}