/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompany } from '../redux/stock/stockActions';
import { Link, useParams } from 'react-router-dom';


const CompanyContainer = ({ stockData, loading, errorMsg, fetchCompany }) => {
  const { ticker } = useParams();
  useEffect(() => {
    fetchCompany(ticker);
  }, []);

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
                <h1>{stockData.name}</h1>
                <h4>{stockData.symbol}</h4>
                <p>{stockData.price}</p>
              </div>
            </div>
            <div className="card-footer">
              <button className="button is-danger is-light btn-more card-footer-item">
                <Link to="/">Close</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stockData: state.stock.company,
  loading: state.stock.loading,
  errorMsg: state.stock.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (ticker) => dispatch(fetchCompany(ticker)),
});

CompanyContainer.propTypes = {
  mapStateToProps: PropTypes.func.isRequired,
  mapDispatchToProps: PropTypes.func.isRequired,
  fetchCompany: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyContainer);
