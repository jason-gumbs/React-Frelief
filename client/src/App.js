import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resources from "./pages/Resources";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Resources} />
        <Route exact path="/resource" component={Resources} />
        <Route exact path="/resource/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
