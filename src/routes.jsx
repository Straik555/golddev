import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {Home} from './page/Home';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={'/home'} /> } />
            <Route path={'/home'} component={Home} />

        </Switch>
    )
}