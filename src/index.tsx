import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import { mainStore } from './tools/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
