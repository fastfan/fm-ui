module.exports = {
    base: '/fm-ui/',
    title: 'FM UI',
    description: 'Inspiration from Ele UI',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    displayAllHeaders: true, // 显示所有页面的标题链接
    smoothScroll: true, // 启用页面滚动效果
    // extend: 'vuepress-theme-reco',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        // type: 'blog',
        author: 'fastfan',
        startYear: '2018',
        editLinks: false,
        docsDir: 'docs',
        authorAvatar: '/fastfan.jpg',
        // valineConfig: {
        //   appId: '7UVrYoXI8L5RbdVsYkR2Ruiq-gzGzoHsz',     // your appId
        //   appKey: 'Q1U9mUiXSYTmEGLIbofuh4n7' // your appKey
        // },
        codeTheme: 'solarizedlight',
        noFoundPageByTencent: false, // 404 腾讯公益
        friendLink: [
            // {
            //   title: 'CSDN',
            //   desc: '老博客',
            //   email: 'yeyu.yeyu@163.com',
            //   link: 'https://blog.csdn.net/wfwfwf128'
            // }
        ],
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '组件',
                link: '/views/guide/install.md',
                icon: 'reco-v2ex'
            },
            {
                text: '时间线',
                link: '/timeline/',
                icon: 'reco-date'
            },
            {
                text: 'External',
                link: 'https://github.com/fastfan/fm-ui'
            },
        ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认文案 “标签”
            }
        },
        sidebar: {
            '/views/': [{
                    title: '更新日志',
                    collapsable: false,
                    children: ['/views/CONTRIBUTING.md'],
                }, {
                    title: '开发指南',
                    collapsable: false,
                    children: ['/views/guide/install.md', '/views/guide/get-started.md'],
                },
                {
                    title: '业务组件',
                    collapsable: false,
                    children: ['/views/components/basic/','/views/components/basic/details.md', '/views/components/basic/form.md', '/views/components/basic/table.md','/views/components/basic/submit-form.md'],
                },
                {
                    title: '可视化组件',
                    collapsable: false,
                    children: ['/views/components/visual/'],
                },
            ]
        },

    },
    plugins: [
        [require('./plugins/demo/')],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
            tip: {
                content: "复制成功!"
            }
        }],
        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }]
    ],
};