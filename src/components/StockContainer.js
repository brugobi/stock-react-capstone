import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStock } from '../redux/stock/stockActions';
import FilterContainer from './FilterContainer';
import StockItems from './stocks/StockItems';

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
          <>
            <FilterContainer />
            <div className="container">
              {filteredStocks.slice(0, 100).map((stock) => (
                <StockItems key={stock.ticker} company={stock} />
              ))}
            </div>
          </>
        );
      }
      return (
        <h2>OMG! no company here...how is this possible?</h2>
      );
  }
};

export default StockContainer;
