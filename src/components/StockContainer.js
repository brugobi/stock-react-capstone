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
      return (
        <div>
          <FilterContainer />
          <div className="container">
            {filteredStocks.slice(0, 20).map((stock) => (
              <div className="card-wrapper">
                <div className="card stock-card" key={stock.ticker}>
                  <div className="content">
                    <p>
                      (
                  {stock.ticker}
                  )
                </p>
                    <p>{stock.companyName}</p>
                    <p className="price">{stock.price}</p>
                    <p>{stock.changesPercentage}</p>
                  </div>
                  <div className="card-footer">
                    <button type="button" className="button is-danger is-light btn-more card-footer-item">
                      <Link to={`/CompanyContainer/${stock.ticker}`}>See More</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
};

export default StockContainer;
