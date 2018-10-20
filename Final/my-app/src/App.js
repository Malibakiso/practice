import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import index from "./components/index";
import style from "./style/style.css";
import './App.css';
import './style/bars.css';
import './style/bootstrap.css';
// import './style/bootstrap.min.css';
// import './style/font-awesome.css';


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
