import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state.js';
import { I18nextProvider } from "react-i18next"; 
import i18n from './i18n'; 

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App state={store._state} />
      </I18nextProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree();

reportWebVitals();
