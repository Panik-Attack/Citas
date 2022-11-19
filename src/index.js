import React from 'react';
import ReactDOM from 'react-dom/client';
import { CitaApp } from './components/disponibilidad/CitaApp';
// import { AppRouter } from './routers/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CitaApp />
  </React.StrictMode>
);

