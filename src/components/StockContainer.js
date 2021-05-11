/* eslint-disable */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchStock from '../redux/stock/stockActions';
import { Link } from 'react-router-dom';
import FilterContainer from './FilterContainer';

const StockContainer = ({ stockData, fetchStock, filter }) => {
  useEffect(() => {
    fetchStock();
  }, []);

  const profitable = filter === 'Profitable' ? '+' : '-';
  let filteredStocks =
    filter === 'All' ? stockData.stocks :
      stockData.stocks.filter(profit => profit.changesPercentage.includes(profitable));

  // console.log(filteredStocks, filter)
  if (stockData.error) {
    <h2>{stockData.error}</h2>
  } if (stockData.loading) {
    <h2>Loading</h2>

  } return (
    <div>
      <FilterContainer />
      <div className="container">
        {filteredStocks.slice(0, 20).map((stock) => (
          <div className="card-wrapper">
            <div className="card stock-card" key={stock.ticker}>
              <div className="content">
                <p>({stock.ticker})</p>
                <p>{stock.companyName}</p>
                <p className="price">{stock.price}</p>
                <p>{stock.changesPercentage}</p>
              </div>
              <div className="card-footer">
                <button className="button is-danger is-light btn-more card-footer-item">
                  <Link to="/ModalContainer">See More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stockData: state.stock,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

StockContainer.propTypes = {
  userData: PropTypes.object.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  mapDispatchToProps: PropTypes.func.isRequired,
  fetchStock: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockContainer);
