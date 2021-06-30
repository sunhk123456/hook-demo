
import React from 'react';
import Demo from '../pages/demo'
import Demo2 from '../pages/demo2/index'
import App from '../App'
import AAA from '../pages/context/index'
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/Demo2'/>
                    )}/>
                    <Route path='/Page1' component={Demo}/>
                    <Route path='/App' component={App}/>
                    <Route path='/Demo2' component={Demo2}/>
                    <Route path='/aaa' component={AAA}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;