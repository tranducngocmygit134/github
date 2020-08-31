import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//dev-651tv6zp.us.auth0.com
//OFcby968wGsuCRrjp1P55qfNgEutLS68

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-651tv6zp.us.auth0.com"
      clientId="OFcby968wGsuCRrjp1P55qfNgEutLS68"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
