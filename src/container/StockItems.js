import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StockItems = ({ company }) => {
  const {
    changesPercentage,
    companyName,
    price,
    ticker,
  } = company;
  return (
    <div className="card-wrapper">
      <div className="card stock-custom card-effect">
        <div className="content">
          <p className="OpenSans-font color-orange">
            (
            {ticker}
            )
          </p>
          <p className="OpenSans-font">{companyName}</p>
          <p className="price color-blue">
            $
            {price}
          </p>
          <p className={changesPercentage.includes('-') ? 'is-danger' : 'is-success'}>{changesPercentage}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="is-white btn-more-close card-footer-item">
            <Link to={`/CompanyContainer/${ticker}`} className="btn-link">See More</Link>
          </button>
        </div>
      </div>
    </div>

  );
};

StockItems.propTypes = {
  company: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StockItems;
