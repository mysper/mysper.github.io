import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../style/App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
