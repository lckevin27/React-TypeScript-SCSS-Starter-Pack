import React from 'react';
import { HashRouter as HRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <HRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/About" component={ About } />
        </Switch>
        <Footer />
      </div>
    </HRouter>
  );
}

export default App;
