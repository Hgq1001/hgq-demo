/**
 * @Author:hgq
 * @Describe:
 */

export default {
    SIDE_MENU: [
        {
            name: '首页',
            url: 'home',
            icon: 'home'
        },
        {
            name: '音乐模块',
            url: 'music',
            icon: 'bars',
            children: [{name: '音乐系列', url: 'music'}]
        },
        {
            name: '工具模块',
            url: 'tool',
            icon: 'tool',
            children: [
                {name: '小应用', url: 'tools'},
                {name: '富文本编辑器', url: 'editor'},
                {name: '待办事项', url: 'todoList'}
            ]
        },

    ]
};
