import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Profitable', 'Unprofitable'];

  const filterByCat = (e) => {
    const cat = e.target.value;
    handleFilter(cat);
  };

  return (

    <nav className="navbar navbar-custom box" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="brand Bookstore-CMS">Globl Market</div>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-item CATEGORIES">
          <div className="control">
            <div className="">Filter by: </div>
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

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
