import ActiveView from '../constants/ActiveView';
import {SEARCH_SUCCESS, BACK_TO_SEARCH} from '../actions';

const initialState = {
  activeView: ActiveView.SEARCH
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        activeView: ActiveView.PRODUCT
      };
    case BACK_TO_SEARCH:
      return {
        activeView: ActiveView.SEARCH
      };
    default:
      return state;
  }
}