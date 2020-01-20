/**
 * @Author:hgq
 * @Describe:
 */

export default {
    SIDE_MENU: [
        {
            name: '首页',
            url: '/home',
            icon: 'home'
        },
        {
            name: '通用',
            url: '/universal',
            icon: 'bars',
            children: [
                {name: '按钮', url: '/buttonPage'},
                // {name: '图标', url: '/iconPage'},
            ]
        },
        {
            name: '测试',
            url: '/map',
            icon: 'dribbble',
            children: [
                {name: '测试1', url: '/test1'},
            ]
        },
    ]
};
