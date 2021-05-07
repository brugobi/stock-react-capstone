import { CHANGE_FILTER } from '../stockTypes';

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export default changeFilter;
