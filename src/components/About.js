import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams} from 'react-router-dom'
import Welcome from './Welcome'
import Contact from './Contact'

export function About (){
   
        let {path, url} = useRouteMatch();
        return (
            <Router>
            <div>
                <h1>This is About La la la</h1>
                <ul>
                    <li><Link to={`${url}/welcome`}>Home Page</Link>
                    </li>
                    <li>
                        <Link to={`${url}/contact`}>Contact Page</Link>
                    </li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path={path}>
                        <h1>Select options from menu</h1>
                     
                    </Route>
                    
                    <Route path={`${path}/:id`}>
                        <IDcons />
                    </Route>
                </Switch>
            </div>
            </Router>
           
        )
    
}
function IDcons(){
    let {id} = useParams();
 

    return(
        <div>
            This is id {id}
            <Welcome />
            <Contact/>
        </div>
    )
}

export default About
