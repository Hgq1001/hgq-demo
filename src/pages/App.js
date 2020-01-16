/**
 * @Author:hgq
 * @Describe:
 */

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Routers from '../route/RouterMap';
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import Container from "./Container/Container";
import Login from "./Login/Login";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('app---->', this.props);
    }

    render() {
        let token = this.props.token;
        return (
            <Router>
                <Switch>
                    {/*{Routers.map((item, index) => {*/}
                        {/*if (item.path === '/') {*/}
                            {/*return <Route key={index} path='/' exact render={() => (*/}
                                {/*<Redirect to={'/home'}/>*/}
                            {/*)}/>;*/}
                        {/*}*/}
                        {/*return <Route key={index} path={item.path} exact render={props =>*/}
                            {/*!item.auth ? <item.component {...props} /> :*/}
                                {/*token ? <item.component {...props} /> :*/}
                                    {/*<Redirect to={{*/}
                                        {/*pathname: '/login',*/}
                                        {/*state: {from: props.location}*/}
                                    {/*}}/>*/}
                        {/*}/>;*/}
                    {/*})}*/}
                    <Route path="/" component={Container} />
                    <Route path="/login" component={Login} />
                </Switch>

            </Router>
        );
    }
}


export default connect((store) => ({
    token: store.login.token
}))(App);
