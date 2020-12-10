import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnimateSwitch from './AnimateSwitch';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Home from './Home';
import About from './About';
import Footer from './Footer';
import PrivateLogin from './PrivateLogin';
import Post from './Post';
import Work from './Work';
function App() {
  return (
    <Fragment>
      <Router>
        <Provider store={store}>
          <AnimateSwitch during={1000}>
            <Route path="/" component={Home} exact></Route>
            <Route path="/me" component={About} exact></Route>
            <Route path="/post" component={Post} exact></Route>
            <Route path="/work" component={Work} exact></Route>
            <Route path="/private/login" component={PrivateLogin} exact></Route>
          </AnimateSwitch>
        </Provider>
      </Router>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
