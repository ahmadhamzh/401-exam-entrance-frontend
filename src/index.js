import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="dev-pkkglc0a.us.auth0.com"
  clientId="4s0A1IvBWMrPBmOUcgngAaF3SucJgC44"
  redirectUri={window.location.origin}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
