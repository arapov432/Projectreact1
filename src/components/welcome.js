import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom';
import Contact from './Contact';

class Welcome extends Component {
    render() {
        return (
            <div className="container">
           <div className="jumbotron text-center">
               <h1>This is Home. Welcome to Home</h1>
           </div>
           <Router>
           <ul>
               <li>
                   <Link to="/Netflix">Netflix</Link>
               </li>
               <li>
                   <Link to="/Amazon-prime">Amazon</Link>
               </li>
               <li>
                   <Link to="/Google-cloud">Google</Link>
               </li>
           </ul>
           <Switch>
               <Route exact path="/:id" children={<Child />}/>
           </Switch>
           </Router>
          </div>
        )
    }
}
function Child(){
    let {id}= useParams();
    return (
        <div>
            <h1> ID: {id}</h1>
            <Contact/>
        </div>
    )
}
export default Welcome
