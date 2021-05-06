import {
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE,
  CHANGE_FILTER,
} from './stockTypes';

const initialState = {
  loading: false,
  stocks: [],
  filtered: [],
  error: '',
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        stocks: action.payload,
        error: '',
      };
    case CHANGE_FILTER:
      return {
        ...state,
        loading: false,
        filtered: action.payload,
        error: '',
      };
    case FETCH_STOCK_FAILURE:
      return {
        ...state,
        loading: false,
        stocks: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default stockReducer;
