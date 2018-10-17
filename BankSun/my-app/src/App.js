// import style from "./my-app/src/styles/style";
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import index from "./components/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

      <Switch>
        <Route path = "/index" component = {index}/>
      </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
