import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnimateSwitch from './AnimateSwitch';

import Home from './Home';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <AnimateSwitch during={1000}>
          <Route path="/" component={Home} exact></Route>
          <Route path="/me" component={About}></Route>
        </AnimateSwitch>
      </Router>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
