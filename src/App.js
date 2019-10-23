import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import logo from './logo.svg';
import Blog from './components/Blog.js';
import './App.css';

const defaultPage=()=>{
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <a className="App-link" href="http://47.98.251.172/#/blog">摸我</a>
      </header>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/blog" component={Blog} />
        <Route path="/" component={defaultPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
