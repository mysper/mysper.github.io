import React, { Component } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnimateSwitch from './AnimateSwitch';
import { Provider } from "react-redux";
import store from '../store';

import Home from './Home';
import About from './About';
import Footer from './Footer';
import Private from './Private';
import Post from './Post';
import Work from './Work';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <AnimateSwitch during={1000}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/me" component={About} exact></Route>
              <Route path="/post" component={Post} exact></Route>
              <Route path="/work" component={Work} exact></Route>
              <Route path="/private" component={Private} exact></Route>
            </AnimateSwitch>
          </Router>
          <Footer></Footer>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
