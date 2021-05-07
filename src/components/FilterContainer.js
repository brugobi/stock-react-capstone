import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeFilter from '../redux/stock/filter/filterActions';

const FilterContainer = ({ changeFilter }) => {
  const categories = ['All', 'Profitable', 'Unprofitable'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    changeFilter(cat);
  };

  return (

    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">Global Market</div>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-item">
          <div>
            <div>Filter by: </div>
          </div>
          <select name="filter" id="filter" onChange={filterByCat}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* <div className="navbar-end">
        <IconContext.Provider value={{ size: '30px', color: '#379cf6' }}>
          <FaUserCircle />
        </IconContext.Provider>
      </div> */}
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (categories) => dispatch(changeFilter(categories)),
});

FilterContainer.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterContainer);
