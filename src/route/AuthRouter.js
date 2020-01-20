/**
 * @Author:hgq
 * @Describe:
 */
import React from 'react';
import {withRouter} from 'react-router';
import {Route, Redirect} from 'react-router-dom';

const AuthRouter = ({component: Component, ...rest}) => {
    const isLogged = localStorage.getItem('isLogin') === '1';
    return <Route {...rest} render={props => (isLogged ? <Component {...props} /> : <Redirect to={{
        pathname: '/login',
        fromPath: props.location.pathname
    }}/>)}/>;
};

export default withRouter(AuthRouter);
