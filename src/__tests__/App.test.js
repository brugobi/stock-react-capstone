import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders three <StockContainer /> components', () => {
    expect(wrapper.find('StockContainer')).toBeTruthy();
  });

  it('renders three <CompanyContainer /> components', () => {
    expect(wrapper.find('CompanyContainer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
