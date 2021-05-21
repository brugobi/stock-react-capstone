import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import StockContainer from '../components/StockContainer';
import store from '../redux/store';

describe('<StockContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><StockContainer /></Provider>);
  });

  it('renders three <FilterContainer /> components', () => {
    expect(wrapper.find('FilterContainer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><StockContainer /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});