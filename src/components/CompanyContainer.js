/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCompany } from '../redux/stock/stockActions';
import { Link, useParams } from 'react-router-dom';


const CompanyContainer = ({ stockData, fetchCompany }) => {
  const { ticker } = useParams();
  useEffect(() => {
    fetchCompany(ticker);
  }, []);

  // let stock = JSON.stringify(stockData[0])
  // let obj_str = util.inspect(stock)
  // console.log(stock.name)
  if (stockData.error) {
    return <h2>{stockData.error}</h2>
  } if (stockData.loading) {
    return <h2>Loading</h2>

  }
  
  return (
    <div>
      {
        
        console.log(stockData[0])
      }
      <div className="container">
        
          <div className="card-wrapper">
            <div className="card stock-card">
              <div className="content">
              <div>
                <h1>Company Information</h1>
                <p>data</p>

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
});

const mapDispatchToProps = (dispatch) => ({
  fetchCompany: (ticker) => dispatch(fetchCompany(ticker)),
});

CompanyContainer.propTypes = {
  userData: PropTypes.object.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  mapDispatchToProps: PropTypes.func.isRequired,
  fetchCompany: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompanyContainer);
