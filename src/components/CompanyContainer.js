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
                    <h1 className="OpenSans-font color-orange">
                      {stockData.name}
                      {' '}
                      -
                      {' '}
                      {stockData.symbol}
                    </h1>
                    <div className="price color-blue">
                      <p>
                        <span className="color-gray">Price - </span>
                        $
                        {stockData.price}
                      </p>
                      <p>
                        <span className="color-gray">dayLow - </span>
                        $
                        {stockData.dayLow}
                      </p>
                      <p>
                        <span className="color-gray">dayHigh - </span>
                        $
                        {stockData.dayHigh}
                      </p>
                      <p className={stockData.changesPercentage > 0 ? 'is-success' : 'is-danger'}>
                        <span>
                          Profite -&gt;&nbsp;
                          {stockData.changesPercentage}
                          %
                        </span>
                      </p>
                    </div>
                    <div className="exchange-div">
                      <p>
                        <span className="color-blue price">Exchange -&gt;&nbsp;</span>
                        <span className="color-orange">{stockData.exchange}</span>
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
