import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App'

render((
    <BrowserRouter history={BrowserRouter}>
      <Route path="/" component={Header}>
        <Link component={App}/>
      </Route>
    </BrowserRouter>
  ), document.getElementById('root')
);
