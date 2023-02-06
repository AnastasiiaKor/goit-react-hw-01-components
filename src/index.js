import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

// ReactDOM.render(<App></App>, document.querySelector('#root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
