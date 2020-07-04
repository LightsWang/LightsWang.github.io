module.exports = {
  title: "简简单单、点点滴滴",
  description: '只要你还愿意努力，相信老天会给你惊喜！',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["link", { rel: "stylesheet", href: "/common.css" }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      // { text: '联系', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
      //   ]
      // }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类', // 默认 “分类”
        ariLabel:"分类",
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
        ariLabel:"标签",
      }
    },
    // friendLink: [
    //   {
    //     title: '王某人',
    //     desc: '测试啊测试',
    //     email: '1156743527@qq.com',
    //     link: 'https://www.recoluan.com'
    //   },
    //   {
    //     title: 'vuepress-theme-reco',
    //     desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: 'https://vuepress-theme-reco.recoluan.com'
    //   },
    // ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '简简单单、点点滴滴',
    // 作者头像
    authorAvatar: '/avatar.gif',
    // 备案号
    record: '',
    // 项目开始时间
    startYear: '2020',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'rlCo2V3huPBM9j4mp74HgJJg-gzGzoHsz',// your appId
      appKey: 'wxksrSAqeqUr4IwKqUA9xNYJ', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  "plugins": [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["haru1"],
        clean: false,
        messages: {
          welcome: '相遇即是缘，欢迎你的到来！ ',
          home: '跟我回家！',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      },
    ],
    "vuepress-plugin-auto-sidebar"
  ]
}  
