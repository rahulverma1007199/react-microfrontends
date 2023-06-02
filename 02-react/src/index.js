import React from 'react';
import ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { registerApplication ,start } from 'single-spa';
import App from './App';

const app = singleSpaReact({
  React,
  ReactDOM,
  rootComponent:App
});

registerApplication({
  name:"react-app",
  app,
  activeWhen:['/'],
});

start();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
