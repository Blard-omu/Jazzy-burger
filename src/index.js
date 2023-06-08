import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UtilsProvider } from "./contexts/UtilsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UtilsProvider>
    <App />
    </UtilsProvider>
  </React.StrictMode>
);