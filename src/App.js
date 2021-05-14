import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';
import StockContainer from './components/StockContainer';
import ModalContainer from './components/ModalContainer';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <>
          <Switch>
            <Route exact path="/" component={StockContainer} />
            <Route exact path="/ModalContainer" component={ModalContainer} />
          </Switch>
        </>
      </Provider>
    </div>
  );
}

export default App;
