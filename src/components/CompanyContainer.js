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

  switch (true) {
    case loading:
      return (
        <h2 className="is-white">Loading</h2>
      );
    case errorMsg:
      return (
        <h2>{errorMsg}</h2>
      );
    default:
      return (
        <div>
          <div className="container">
            <div className="card-wrapper">
              <div className="card stock-custom">
                <div className="content">
                  <div>
                    <h1>
                      {stockData.name}
                      {' '}
                      -
                      {' '}
                      {stockData.symbol}
                    </h1>
                    <div className="price">
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
                    </div>
                    <div>
                      <p>
                        exchange -
                        {stockData.exchange}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="button" className="btn-more-close card-footer-item">
                    <Link to="/" className="btn-link">Close</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default CompanyContainer;
