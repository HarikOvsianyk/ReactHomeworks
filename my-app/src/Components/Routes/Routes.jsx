
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from '../../Routes/Routes';

export const Routes = () => {
    return (
        <Switch>
            {
                routes.map((route, i) => <Route key={i} path={route.path} component={route.component} exact/>)
            }
        </Switch>
    );
};
