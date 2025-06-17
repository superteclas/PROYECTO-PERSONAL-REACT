import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS personalizado
import '../styles/index.css';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Vista principal
import Home from './components/Home'; // O './views/Home' si lo moviste

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
