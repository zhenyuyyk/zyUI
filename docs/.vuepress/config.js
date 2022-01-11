module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'zyAdimn',
    description: '',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
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
        ],
    },
};
