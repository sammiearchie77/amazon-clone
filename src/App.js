import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/">

            <Header />
            <Home />
            <Product />

          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
