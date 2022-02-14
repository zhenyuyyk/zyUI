const {path} = require('@vuepress/utils');
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'zyAdimn',
    description: '',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    plugins: [[
        require('vuepress-plugin-demo-container-vue3'),
        {
            componentsDir: path.resolve(__dirname, './../examples')
        }
    ]],
    // 加入的额外标签
    head: [['script', {type: 'module', src: app}]],
    themeConfig: {
        logo: '',
        home: 'README.md',
        sidebar: [
            {
                text: '安装',
                link: '/README.md',
            },
            {
                text: '基础组件',
                children: [
                    {
                        text: 'Checkout 多选框',
                        link: '/基础组件/Checkout 多选框.md',
                    },
                ]
            },
            {
                text: '表单封装',
                children: [
                    {
                        text: '表单',
                        link: '/表单组件/表单.md',
                    },
                ]
            },
        ],
    },
};
