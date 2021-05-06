import { Provider } from 'react-redux';
import './App.css';
// import StockContainer from './components/StockContainer';
import FilterContainer from './components/FilterContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <StockContainer /> */}
        <FilterContainer />
      </Provider>
    </div>
  );
}

export default App;
