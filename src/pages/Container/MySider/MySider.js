/**
 * @Author:hgq
 * @Describe:
 */
import React, {Component} from 'react';
import Constants from "../../../utils/Contstants";
import {Icon, Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const MySider = ({collapsed, defaultOpenKey, defaultSelectedKey}) => {

    return (
        <Layout.Sider collapsed={collapsed}>
            <div className="logo"/>
            <Menu
                theme={'dark'}
                openKeys={[defaultOpenKey]}
                selectedKeys={[defaultSelectedKey]}
                mode={'inline'}
            >
                {
                    Constants.SIDE_MENU.map((item, index) => {
                        if (item.children && item.children.length) {
                            return (
                                <Menu.SubMenu
                                    key={item.url}
                                    title={
                                        <span>
                                            <Icon type={item.icon}/>
                                            <span>{item.name}</span>
                                        </span>
                                    }
                                >
                                    {item.children.map(menu => (
                                        <Menu.Item key={menu.url}>
                                            <Link to={menu.url}>{menu.name}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            );
                        }
                        return (
                            <Menu.Item key={item.url}>
                                <Link to={item.url}>
                                    <Icon type={item.icon}/>
                                    <span className="nav-text">{item.name}</span>
                                </Link>
                            </Menu.Item>
                        );
                    })
                }

            </Menu>
        </Layout.Sider>

    );
};


export default MySider;
