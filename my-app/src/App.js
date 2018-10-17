import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import home from "./components/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route path = "/home" component = {home}/>
        </Switch>

      </div>
    );
  }
}

export default App;
