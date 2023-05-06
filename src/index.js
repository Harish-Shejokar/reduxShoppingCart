import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from "./ReduxStore/Store";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
   
      <App />
    
  </Provider>
);
