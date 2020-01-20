/**
 * @Author:hgq
 * @Describe:
 */
import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router";
import Routes from "../../../route/RoutesMap";
import {Layout} from "antd";
import MyBreadcrumb from "../Container";

class MyContents extends Component {
    render() {
        return (



                <Layout.Content className="content" id="content">

                    <Switch>
                        {Routes.map(route => <Route render={() => <route.component/>} key={route.path}
                                                    path={route.path}/>)}
                        <Redirect from="/" exact to="/home"/>
                        {/*<Redirect to="/error/404"/>*/}
                    </Switch>
                </Layout.Content>
        );
    }
}

export default MyContents;
