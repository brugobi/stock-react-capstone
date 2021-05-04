/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import { connect } from 'react-redux';
import fetchUsers from '../redux/stock/stockActions';

const StockContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  
  if (userData.error) {
    <h2>{userData.error}</h2>
  } if (userData.loading) {
    <h2>Loading</h2>
  } return (
    
    <div>
      <h2>User List</h2>
      <div>
        {userData
          && userData.users && userData.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userData: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

StockContainer.propTypes = {
  userData: PropTypes.object.isRequired,
  mapStateToProps: PropTypes.func.isRequired,
  mapDispatchToProps: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StockContainer);
