/**
 * @Author:hgq
 * @Describe:
 */
import React, {Component} from 'react';
import {Breadcrumb} from "antd";
import Constants from '../../../utils/Contstants';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import './styles.css';

class MyBreadcrumb extends Component {


    componentDidMount() {
        console.log('MyBreadcrumb--->', this.props);
    }

    getBreadcrumbRoutes = () => {
        let currentPathname = this.props.location.pathname;
        let routes = [];
        Constants.SIDE_MENU.forEach((route, index) => {
            if (index === 0) {
                routes.push({name: route.name, url: route.url, key: route.url});
            }
            if (route.children && route.children.length) {
                route.children.forEach(item => {
                    if (item.url === currentPathname) {
                        routes.push({name: route.name, url: route.url, key: route.url});
                        routes.push({name: item.name, url: item.url, key: item.url});
                    }
                });
            }
        });
        console.log('routes--->', routes);
        return routes;
    };

    getBreadcrumbItemRender = (route, params, routes, paths) => {
        console.log('getBreadcrumbItemRender--->', route, params, routes, paths);
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.name}</span>
        ) : (
            <Link to={paths.join('/')}>{route.name}</Link>
        );
    };


    render() {
        return (
            <Breadcrumb itemRender={this.getBreadcrumbItemRender} routes={Constants.SIDE_MENU}/>
        );
    }
}

export default MyBreadcrumb;
