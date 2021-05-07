import axios from 'axios';
import {
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE,
} from './stockTypes';

const fetchStockRequest = () => ({
  type: FETCH_STOCK_REQUEST,
});

const fetchStockSuccess = (stocks) => ({
  type: FETCH_STOCK_SUCCESS,
  payload: stocks,
});

const fetchStockFailure = (error) => ({
  type: FETCH_STOCK_FAILURE,
  payload: error,
});

const fetchStock = () => (dispatch) => {
  dispatch(fetchStockRequest);
  axios.get('https://financialmodelingprep.com/api/v3/actives?apikey=KEY')
    .then((response) => {
      const stocks = response.data;
      dispatch(fetchStockSuccess(stocks));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchStockFailure(errorMsg));
    });
};

export default fetchStock;
