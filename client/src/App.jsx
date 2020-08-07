import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </React.Fragment>
    </Router>
  </Provider>
);

export default App;
