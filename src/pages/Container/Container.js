import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './styles.css';
import Constants from '../../utils/Contstants';
import Contents from "./Contents";
import {Link} from "react-router-dom";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={() => this.onCollapse()}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon type="pie-chart"/>
                            <Link to={`/home`}>首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon type="desktop"/>
                            <Link style={{color: '#fff'}} to={`/user`}>用户</Link>
                        </Menu.Item>
                        <Menu.Item key="3" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Icon type="desktop"/>
                            <Link to={`/about`}>关于</Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="user"/>
                  <span>User</span>
                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon type="team"/>
                  <span>Team</span>
                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Contents/>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Container;

