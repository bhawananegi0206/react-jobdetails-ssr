import React, { Component } from 'react';
import {Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import List from './pages/list';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={props => <Home {...props} />} />
          <Route path='/list' component={props => <List {...props} />} />
        </Switch>
        </BrowserRouter>
      </div>
    )
    return (
      <BrowserRouter>
        <App/>
        </BrowserRouter>
    );
  }
}

export default App;