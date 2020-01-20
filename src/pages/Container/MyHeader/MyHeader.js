/**
 * @Author:hgq
 * @Describe:
 */
import React from "react";
import {Avatar, Icon, Layout, Menu, Dropdown} from "antd";
import './styles.css';

const {Header} = Layout;
const MyHeader = ({collapsed, onCollapse, logout}) => {

    const getDropdownList = () => {
        return <Menu>
            <Menu.Item key="0">
                <Icon type="user"/>
                个人设置
            </Menu.Item>
            <Menu.Item key="1">
                <Icon type="setting"/>
                系统设置
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="3" onClick={() => logout()}>
                <Icon type="logout"/>
                退出登录
            </Menu.Item>
        </Menu>;
    };

    return (
        <Header style={{background: '#fff', padding: '0 10px '}} className='header'>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => onCollapse()}
            />
            <div className='header_right'>
                <Dropdown overlay={getDropdownList()}>
                    <Avatar size={'large'} style={{cursor: 'pointer'}} src={require('../../../images/avatar.jpg')}
                            alt=""/>
                </Dropdown>
            </div>
        </Header>
    );
};

export default MyHeader;
