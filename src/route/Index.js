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
import {connect} from "react-redux";
import 'antd/dist/antd.css';
import Login from "../pages/Login/Login";
import AuthRouter from "./AuthRouter";
import Container from "../pages/Container/Container";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('app--->', this.props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login}/>
                    <AuthRouter path="/" component={Container}/>
                </Switch>

            </Router>
        );
    }
}


export default connect((store) => ({
    token: store.login.token
}))(App);
