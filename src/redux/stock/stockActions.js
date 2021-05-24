import axios from 'axios';
import {
  FETCH_STOCK_REQUEST,
  FETCH_STOCK_SUCCESS,
  FETCH_STOCK_FAILURE,
  FETCH_COMPANY_SUCCESS,
} from './stockTypes';

const fetchStockRequest = () => ({
  type: FETCH_STOCK_REQUEST,
});

const fetchStockSuccess = (stocks) => ({
  type: FETCH_STOCK_SUCCESS,
  payload: stocks,
});

const fetchCompanySuccess = (company) => ({
  type: FETCH_COMPANY_SUCCESS,
  payload: company,
});

const fetchStockFailure = (error) => ({
  type: FETCH_STOCK_FAILURE,
  payload: error,
});

const API_KEY = process.env.REACT_APP_STOCK_API_KEY;

export const fetchStock = () => (dispatch) => {
  dispatch(fetchStockRequest);
  axios.get(`https://financialmodelingprep.com/api/v3/actives?apikey=${API_KEY}`)
    .then((response) => {
      const stocks = response.data;
      dispatch(fetchStockSuccess(stocks));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchStockFailure(errorMsg));
    });
};

export const fetchCompany = (ticker) => (dispatch) => {
  dispatch(fetchStockRequest);
  axios.get(`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${API_KEY}`)
    .then((response) => {
      const company = response.data[0];
      dispatch(fetchCompanySuccess(company));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchStockFailure(errorMsg));
    });
};
