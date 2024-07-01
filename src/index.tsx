import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'the-new-css-reset';
import Menu from './components/Menu/Menu';
import Section from './components/Sections/Sections';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Menu home='/home' about='/about' contact='/contact'/>
          <Section home='/home' about='/about' contact='/contact'/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();