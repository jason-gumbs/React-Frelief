import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resources from "./pages/Resources";
import Maps from "./pages/Map";
import Search from "./pages/Search";
import Homes from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homes} />
        <Route exact path="/resource" component={Resources} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/resource/map" component={Maps} />
        <Route exact path="/resource/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
