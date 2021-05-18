import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCompany } from '../redux/stock/stockActions';

const CompanyContainer = () => {
  const { ticker } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(ticker));
  }, []);

  const stockData = useSelector((state) => state.stock.company);
  const loading = useSelector((state) => state.stock.loading);
  const errorMsg = useSelector((state) => state.stock.error);

  return loading ? (
    <h2>Loading</h2>
  ) : errorMsg ? (
    <h2>{errorMsg}</h2>
  ) : (
    <div>
      <div className="container">
        <div className="card-wrapper">
          <div className="card stock-card">
            <div className="content">
              <div>
                <h1>
                  {stockData.name}
                  {' '}
                  -
                  {' '}
                  {stockData.symbol}
                </h1>
                <p>
                  Price - $
                  {stockData.price}
                </p>
                <p>
                  dayLow - $
                  {stockData.dayLow}
                </p>
                <p>
                  dayHigh - $
                  {stockData.dayHigh}
                </p>
                <p>
                  exchange -
                  {stockData.exchange}
                </p>
              </div>
            </div>
            <div className="card-footer">
              <button type="button" className="button is-danger is-light btn-more card-footer-item">
                <Link to="/">Close</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyContainer;
