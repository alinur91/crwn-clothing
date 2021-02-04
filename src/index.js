import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store/configureStore'
import {PersistGate} from 'redux-persist/es/integration/react'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}> {/* kogda obnovlyaesh cartItems ne uhodyat persist bolady */}
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
    ,
  document.getElementById('root')
);


