import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resources from "./pages/Resources/Resource.js";
import Maps from "./pages/Map";
import Search from "./pages/Search/Search.js";
import Homes from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route exact path="/resource" component={Resources} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/resource/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
