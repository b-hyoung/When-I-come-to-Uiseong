import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // react-router-dom에서 import 해야 함

const root = ReactDOM.createRoot(document.getElementById('root'));


  root.render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
