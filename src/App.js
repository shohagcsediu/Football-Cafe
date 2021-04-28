import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/details/:teamId">
            <TeamDetail/>
          </Route>

          <Route exact path="/*">
            <h1>Not found</h1>
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
