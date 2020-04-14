import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";
import About from "./components/About";
import NestedLink from './components/NestedLink';
function App() {
  return (
    <div className="container-fluid">
    <div className="jumbotron text-center">
      <h1>This is Jumbotron. I like bootstrap</h1>
    </div>
    <div className="container">
    <Router>
      <h1>Here is navbar </h1>
  <ul>
   <li>
   <Link to="/">Home</Link>
   </li>
   <li>
   <Link to="/about">About</Link>
   </li>
   <li>
     <Link to="/contact">Contact</Link>
   </li>
   <li>
     <Link to="/nested">Nested Link</Link>
   </li>
   </ul>
   <Switch>
     <Route exact path="/">
       <Welcome />
     </Route>
     <Route path = "/about">
       <About />
     </Route>
     <Route path = "/contact">
       <Contact />
     </Route>
     <Route path = "/nested">
       <NestedLink />
     </Route>
   </Switch>
    </Router>    
    </div>  
    </div>     
  );
}

export default App;
