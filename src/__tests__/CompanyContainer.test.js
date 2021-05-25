import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import CompanyContainer from '../components/CompanyContainer';
import store from '../redux/store';

describe('CompanyContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><CompanyContainer /></Provider>);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });

  it('The value Price', () => {
    expect(wrapper.find('Price')).toBeTruthy();
  });

  it('The value dayLow', () => {
    expect(wrapper.find('dayLow')).toBeTruthy();
  });

  it('The value dayHigh', () => {
    expect(wrapper.find('dayHigh')).toBeTruthy();
  });
});
