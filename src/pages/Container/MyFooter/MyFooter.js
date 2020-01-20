/**
 * @Author:hgq
 * @Describe:
 */
import React, {Component} from 'react';
import {Layout} from "antd";

class MyFooter extends Component {
    render() {
        return (
            <Layout.Footer style={{textAlign: 'center', backgroundColor: '#fff'}}>Ant Design ©2018 Created by Ant
                UED</Layout.Footer>
        );
    }
}


export default MyFooter;
