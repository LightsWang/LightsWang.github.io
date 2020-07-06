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
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        autoShrink: true,
        audios: [
          // 本地文件示例
          // {
          //   name: '장가갈 수 있을까',
          //   artist: '咖啡少年',
          //   url: '/bgm/1.mp3',
          //   cover: '/bgm/1.jpg'
          // },
          // 网络文件示例
          {
            name: '处处吻',
            artist: '杨千嬅',
            url: 'https://webfs.yun.kugou.com/202007051704/9e8e3fd2bd247e6ac17b948fddd37a28/part/0/960050/G195/M02/06/11/o5QEAF5YjfeAUe_aADC0kUt3rUc848.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20160807/20160807132804478424.jpg'
          },
          {
            name: ' Wonderful U(Live)',
            artist: '张含韵',
            url: 'https://eu-sycdn.kuwo.cn/3d071b6407233b7dd79f868f27c9032a/5f018d18/resource/n3/13/62/3253780349.mp3',
            cover: 'https://img4.kuwo.cn/star/albumcover/300/19/19/3200679308.jpg'
          },
          {
            name: ' 少年',
            artist: '梦然',
            url: 'https://webfs.yun.kugou.com/202007051554/295cf6d36d6ce208c8612ad6a41ff371/G170/M07/16/11/SocBAF3H3aqAUYOEADmpdloW3bU827.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20191110/20191110174405582448.jpg'
          },
          {
            name: ' Salt',
            artist: 'Ava Max',
            url: 'https://webfs.yun.kugou.com/202007051603/3146bf01920d3d0be8d1fe0306b98f3b/part/0/960931/G095/M04/1C/09/_4YBAFuyAQCAcS5IACxzw8IlOUk721.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20191211/20191211153103312934.png'
          },
          {
            name: '微微',
            artist: '傅如乔',
            url: 'https://webfs.yun.kugou.com/202007051600/7f05b6a7ccc0c123eababf293a5480fd/G200/M0A/14/15/aIcBAF54ZTuASZlZAEOqn_GhLhs992.mp3',
            cover: 'https://p3fx.kgimg.com/stdmusic/20200417/20200417115814250186.jpg'
          },
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]  
      },
    ]
  ]
}  
