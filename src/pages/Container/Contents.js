/**
 * @Author:hgq
 * @Describe:
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {Layout} from 'antd';
import Home from "../Home/Home";
import About from "../About/About";
import User from "../User/User";

const Contents = () => (
    <Layout.Content className="content" id="content">
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />

    </Layout.Content>
);

export default Contents;
