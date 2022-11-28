import React from 'react';
import ReactDOM from 'react-dom/client';
//import './css/bootstrap-reboot.min.css';
import './css/index.min.css';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <HashRouter> {/*пока тут HashRouter чтоб на гите нормально работало*/}
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>

);

reportWebVitals();
