import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import FilterContainer from '../components/FilterContainer';
import store from '../redux/store';

describe('Filter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><FilterContainer /></Provider>);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('The value All', () => {
    expect(wrapper.find('All')).toBeTruthy();
  });

  it('The value Profitable', () => {
    expect(wrapper.find('Profitable')).toBeTruthy();
  });

  it('The value Unprofitable', () => {
    expect(wrapper.find('Unprofitable')).toBeTruthy();
  });
});
