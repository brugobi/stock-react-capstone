import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StockContainer from './components/StockContainer';
import CompanyContainer from './components/CompanyContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={StockContainer} />
              <Route exact path="/CompanyContainer/:ticker" component={CompanyContainer} />
            </Switch>
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
