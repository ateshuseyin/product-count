import {SEARCH_SUCCESS} from '../actions';

const initialState = {
  founded: {
    barcode: '',
    partNo: '',
    quantity: 0
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        founded: action.product
      };
    default:
      return state;
  }
}