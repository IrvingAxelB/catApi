import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "isomorphic-fetch"
import Home from './components/Home';
import Search from './components/Search';
import Header from './components/Header';
import Favorites from "./components/Favorites";
import LinearProgressContainer from './components/LinearProgress';

import './App.css';

import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import middleware from './middleware';

const store = createStore(reducer, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <LinearProgressContainer />
            <Header />
            <Route path={'/'} exact component={Home}/>
            <Route path={'/search'} component={Search}/>
            <Route path={'/favorites'} component={Favorites}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
