/**
 * @Author:hgq
 * @Describe:
 */
import React from 'react';
import {Route} from 'react-router-dom';
import {Layout} from 'antd';
import Home from "../Home/Home";

const Contents = () => (
    <Layout.Content className="content" id="content">
        <Route path="/home" component={Home} />

    </Layout.Content>
);

export default Contents;
