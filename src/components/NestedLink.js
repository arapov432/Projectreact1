import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useRouteMatch, useParams} from 'react-router-dom';
import Welcome from './Welcome';
export class NestedLink extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                  <li>  <Link to="/home">Home</Link>
                   </li>
                   <li><Link to="/application">Applications</Link>
                </li>
                </ul>
                <Switch>
                    <Route exact path="/home">
                        <Welcome/>
                    </Route>
                    <Route path="/application">
                        <Applications/>
                    </Route>
                </Switch>
            </div>
            </Router>

        )
    }
}
function Applications(){
     
        let {path, url} = useRouteMatch();
        return(
            <div>
            <ul>
                <li><Link to={`${url}/mobile-app`}>Mobile Application</Link></li>
                <li><Link to={`${url}/desktop-app`}>Desktop Applications</Link></li>
                <li><Link to={`${url}/cloud-app`}>Cloud Application</Link></li>
            </ul>
            <Switch>
            <Route exact path={path}>
                <h1>Select your Topics</h1>
            </Route>
            <Route path={`${path}/:topicID`}>
                <Topicsid/>
            </Route>
            </Switch>
        </div>
        )
    
}
function Topicsid(){
    let {topicID} = useParams();
    return(
        <div>
            <h1>Topic id is : {topicID}</h1>
            <h1> Build a Productivity App</h1>
            <p>
       
This probably the easiest type of app with which to begin, <br/>
considering there are so many tutorials of basic productivity <br/>
apps out there. When I speak of productivity apps, I'm referring <br/>
to note-taking apps, apps for managing teams, and task lists. Generally <br/>
speaking, anything that helps you accomplish a certain task or be more <br/>
productive. What's great about building a productivity app first is that <br/>
it provides a good introduction to app building because of the relative <br/>
simplicity of many of its features.

You can start with something simple,<br/>
 such as a text editor to write formatted text with markdown easily and <br/>
 then expand upon it. Then add the ability to save text as individual <br/>
  to make your daily schedule easier and go from there.
            </p>
        </div>
    )
}

export default NestedLink
