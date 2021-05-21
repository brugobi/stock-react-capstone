/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStock } from '../redux/stock/stockActions';
import FilterContainer from './FilterContainer';

const StockContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStock());
  }, []);

  const stockData = useSelector((state) => state.stock);
  const filter = useSelector((state) => state.filter);
  const loading = useSelector((state) => state.stock.loading);
  const errorMsg = useSelector((state) => state.stock.error);

  const profitable = filter === 'Profitable' ? '+' : '-';
  const filteredStocks = filter === 'All' ? stockData.stocks
    : stockData.stocks.filter((profit) => profit.changesPercentage.includes(profitable));

  switch (true) {
    case loading:
      return (
        <h2>Loading</h2>
      );
    case errorMsg:
      return (
        <h2>{stockData.error}</h2>
      );
    default:
      if (filteredStocks !== null) {
        return (
          <div>
            <FilterContainer />
            <div className="container">
              {filteredStocks.slice(0, 100).map((stock) => (
                <div className="card-wrapper">
                  <div className="card stock-custom card-effect" key={stock.ticker}>
                    <div className="content">
                      <p className="OpenSans-font color-orange">
                        (
                  {stock.ticker}
                  )
                </p>
                      <p className="OpenSans-font">{stock.companyName}</p>
                      <p className="price color-blue">${stock.price}</p>
                      <p className={stock.changesPercentage.includes('-') ? 'is-danger' : 'is-success'}>{stock.changesPercentage}</p>
                    </div>
                    <div className="card-footer">
                      <button type="button" className="is-white btn-more-close card-footer-item">
                        <Link to={`/CompanyContainer/${stock.ticker}`} className="btn-link">See More</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      return (
        <h2>OMG! no company here...how is this possible?</h2>
      )
  }
};

export default StockContainer;
