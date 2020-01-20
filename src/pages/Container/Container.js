import React, {Component} from 'react';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import './styles.css';
import Constants from '../../utils/Contstants';
import {Link, Switch} from "react-router-dom";
import Routes from '../../route/RoutesMap';
import {Redirect, Route} from "react-router";
import MyHeader from "./MyHeader/MyHeader";
import MyContents from "./MyContents/MyContents";
import MyFooter from "./MyFooter/MyFooter";
import MySider from "./MySider/MySider";
import MyBreadcrumb from "./MyBreadcrumb/MyBreadcrumb";

const {Footer, Sider} = Layout;
const {SubMenu} = Menu;


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            defaultOpenKey: [],
            defaultSelectedKey: [],
        };
    }


    componentDidMount() {
        this.setState({
            defaultOpenKey: this.getSideMenuDefaultConfig(this.props.location, 'open'),
            defaultSelectedKey: this.getSideMenuDefaultConfig(this.props.location, 'select'),
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            defaultOpenKey: this.getSideMenuDefaultConfig(nextProps.location, 'open'),
            defaultSelectedKey: this.getSideMenuDefaultConfig(nextProps.location, 'select'),
        });
    }

    ;

    getSideMenuDefaultConfig = (location, type) => {
        let defaultSelectedKey = location.pathname === '/' ? '/home' : location.pathname;
        let defaultOpenKey = defaultSelectedKey;
        for (const menuObj of Constants.SIDE_MENU) {
            if (menuObj.children) {
                for (const menuList of menuObj.children) {
                    if (menuList.url === defaultOpenKey) {
                        defaultOpenKey = menuObj.url;
                        break;
                    }
                }
            }
        }
        return type === 'selected' ? defaultSelectedKey : defaultOpenKey;
    };


    //sider收缩控制
    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    //退出登录
    logout = () => {
        window.localStorage.setItem('isLogin', '0');
        this.props.history.push('/login');
    };


    render() {
        console.log('this.state--->', this.state);
        return (
            <Layout style={{minHeight: '100vh'}}>
                <MySider
                    collapsed={this.state.collapsed}
                    defaultOpenKey={this.state.defaultOpenKey}
                    defaultSelectedKey={this.state.defaultSelectedKey}
                />
                <Layout>
                    <MyHeader
                        collapsed={this.state.collapsed}
                        onCollapse={() => this.onCollapse()}
                        logout={() => this.logout()}
                    />
                    {
                        this.props.location.pathname !== '/home' && <MyBreadcrumb/>
                    }
                    <MyContents/>
                    <MyFooter/>
                </Layout>
            </Layout>
        );
    }
}

export default Container;

