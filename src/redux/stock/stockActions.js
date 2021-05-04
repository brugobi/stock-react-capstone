import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './stockTypes';

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest);
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchUsersFailure(errorMsg));
    });
};

export default fetchUsers;
