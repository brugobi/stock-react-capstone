import { Provider } from 'react-redux';
import './App.css';
import FilterContainer from './components/FilterContainer';
import StockContainer from './components/StockContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FilterContainer />
        <StockContainer />
      </Provider>
    </div>
  );
}

export default App;
