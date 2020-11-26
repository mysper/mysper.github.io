import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
