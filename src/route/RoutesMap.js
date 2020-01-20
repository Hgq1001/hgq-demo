/**
 * @Author:hgq
 * @Describe:
 */


import Home from "../pages/Home/Home";
import ButtonPage from "../pages/ButtonPage/ButtonPage";
import IconPage from "../pages/IconPage/IconPage";

const Routes = [
    {path: "/home", name: "home", component: Home},
    {path: "/buttonPage", name: "buttonPage", component: ButtonPage},
    {path: "/iconPage", name: "iconPage", component: IconPage},
];
export default Routes;
