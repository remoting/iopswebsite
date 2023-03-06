module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    sidebar: [
      {
        title: 'Group 1',
      },
      {
        title: 'Group 2',
      }
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}