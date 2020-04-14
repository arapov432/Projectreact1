import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom'

export class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
               <h1>This is Contact</h1> 
               <Router>
                   <div>
                       <ul>
                           <li>
                           <Link to="/">Bootstrap</Link>
                            </li>
                            <li>
                                <Link to="/htmlcss">HTML/CSS</Link>
                            </li>
                            <li>
                                <Link to="/js">Javascript</Link>
                                </li>                       
                       </ul>
                       <Switch>
                           <Route exact path="/"><Bootstrapt/></Route>
                           <Route path="/htmlcss"><Htmlcss/></Route>
                           <Route path="/js"><Java/></Route>
                       </Switch>
                   </div>
               </Router>
            </div>
        )
    }
}
function Htmlcss(){
    let {path, url} = useRouteMatch();
    return (
        <div className="container">
          
                <ul>
                    <li>
                        <Link to={`${url}/rendering`}>Rendering topic</Link>
                    </li>
                    <li>
                        <Link to={`${url}/state-to-state`}>States here</Link>
                    </li>
                    <li>
                        <Link to={`${url}/javascript`}>Here's Javascript</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={path}>
                        <h1>Please select a topic.</h1>
                    </Route>
                    <Route path={`{path}/:topicId`}>
                        <Topic/>
                    </Route>
                </Switch>
           
        </div>
    )
}
function Topic(){
    let {topicId} = useParams();
    return(
<div>
    <h1>Topic Id : {topicId}</h1>
</div>
    )
}
function Java(){
   
    return(
<div>
    <h1>Javascript Topic Id :</h1>
</div>
    )
}
function Bootstrapt(){
    let {topicId} = useParams();
    return(
<div>
    <h1>Boot strapt Topic Id : {topicId}</h1>
</div>
    )
}
export default Contact
