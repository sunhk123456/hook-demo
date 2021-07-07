
import React from 'react';
import Demo from '../pages/demo'
import Demo2 from '../pages/demo2/index'
import Demo3 from '../pages/demo3/index'
import App from '../App'
import AAA from '../pages/context/index'
import Context from '../pages/context2/part1'
import Context3 from '../pages/context3'
import Reducer from '../pages/reducer'
import Ref from '../pages/ref/index'
import Mome from '../pages/memo/fater'
import sugon from '../pages/sugon'
import reducerContext from '../pages/reducerContext'
import {Router,Route,Switch,Redirect} from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path='/' exact render={()=>(
                        <Redirect to='/sugon'/>
                    )}/>
                    <Route path='/Page1' component={Demo}/>
                    <Route path='/App' component={App}/>
                    <Route path='/Demo2' component={Demo2}/>
                    <Route path='/Demo3' component={Demo3}/>
                    <Route path='/aaa' component={AAA}/>
                    <Route path='/context' component={Context}/>
                    <Route path='/context3' component={Context3}/>
                    <Route path='/reducer' component={Reducer}/>
                    <Route path='/Ref' component={Ref}/>
                    <Route path='/Mome' component={Mome}/>
                    <Route path='/reducerContext' component={reducerContext}/>
                    <Route path='/sugon' component={sugon}/>
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig;