import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { AiOutlineGlobal } from 'react-icons/ai';
import changeFilter from '../redux/stock/filter/filterActions';

const FilterContainer = ({ changeFilter }) => {
  const categories = ['All', 'Profitable', 'Unprofitable'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    changeFilter(cat);
  };

  return (

    <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand">
            <div>
              <IconContext.Provider value={{ size: '40px', color: '#4c79f2' }}>
                <AiOutlineGlobal />
              </IconContext.Provider>
            </div>
            <div className="is-white brand-name">
              Global Market
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div>
            <div className="is-white">Filter by: </div>
          </div>
          <select name="filter" id="filter" onChange={filterByCat}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
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
