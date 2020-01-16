/**
 * @Author:hgq
 * @Describe:
 */


import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Container from "../pages/Container/Container";

export default [
    {path: "/", name: "container", component: Container},
    {path: "/login", name: "login", component: Login},
];
