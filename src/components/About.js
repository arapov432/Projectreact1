import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import Contact from './Contact'

export class About extends Component {
    render() {
        return (
            <Router>
            <div>
                <h1>This is About La la la</h1>
                <ul>
                    <li><Link to="/welcome">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Page</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path="/welcome">
                        <Welcome/>
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
            </Router>
           
        )
    }
}

export default About
