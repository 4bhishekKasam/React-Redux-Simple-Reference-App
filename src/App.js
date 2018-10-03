import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import store from './store';

//const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Welcome to React-Redux
          </h1>
          </header>
          <PostForm /> <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
