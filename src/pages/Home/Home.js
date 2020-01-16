import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './styles.css';
import Constants from '../../utils/Contstants';

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;


class Home extends Component {
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
            <div>
                this is home
            </div>
        );
    }
}

export default Home;

