/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchStock from '../redux/stock/stockActions';

const StockContainer = ({ stockData, fetchStock }) => {
  useEffect(() => {
    fetchStock();
  }, []);
  
  if (stockData.error) {
    <h2>{stockData.error}</h2>
  } if (stockData.loading) {
    <h2>Loading</h2>
  } return (
    
    <div>
      <h2>Stock List</h2>
      <div>
        {stockData
          && stockData.stocks && stockData.stocks.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stockData: state,
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
