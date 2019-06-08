import React from 'react';
import {Switch, Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Redirect from '../components/Redirect';
import Signin from '../components/Signin';
import Dashboard from '../components/Dashboard';
import SignUp from '../components/SignUp';

export const history = createBrowserHistory();
const AppRouter = props => {

    return(
        <div>
            <Router history={history}>
            <Switch>
                <Route exact={true} path='/' component={() => <Redirect  path='/signin'/>} />
                <Route exact={true} path='/signin' component={Signin} />
                <Route exact={true} path='/dashboard' component={Dashboard} />
                <Route exact={true} path='/signup' component={SignUp} />
            </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;