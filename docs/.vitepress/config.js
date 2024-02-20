export default {
  // 网站的标题，也用作所有页面标题的后缀
  title: '售后前端文档',
  // 网站的描述
  description: 'Just playing around.',
  base: '/vitepress-lab/',
  // 是否启用“暗模式”
  appearance: true,
  // 使用 git commit 获取时间戳。 此选项启用默认主题以显示页面的最后更新时间
  lastUpdated: true,
  // 当设置为 true 时，VitePress 不会因为无效链接而导致构建失败。
  ignoreDeadLinks: true,
  markdown: {
    // 代码显示行号
    lineNumbers: false
  },
  themeConfig: {
    // 导航栏
    // nav: [
    //   { text: '导航1', link: '/guide' },
    //   {
    //     text: '更多',
    //     items: [
    //       { text: '导航2', link: '/item-1' },
    //       { text: '导航3', link: '/item-2' },
    //       { text: '导航4', link: '/item-3' }
    //     ]
    //   }
    // ],
    // 侧边栏
    sidebar: [
      {
        text: '指南',
        // 是否可折叠
        collapsible: true,
        // 是否是折叠的
        collapsed: false,
        items: [
          { text: '介绍', link: '/guide/intro' },
          { text: '安装', link: '/guide/install' },
          { text: '配置', link: '/guide/config' }
        ]
      },
      {
        text: '组件',
        // 是否可折叠
        collapsible: true,
        items: [
          { text: '组件1', link: '/components/component-1' },
          { text: '组件2', link: '/components/component-2' },
          { text: '组件3', link: '/components/component-3' }
        ]
      }
    ],
    // 显示上次更新时间之前的前缀文本
    lastUpdatedText: '最近更新',
    editLink: {
      pattern: 'https://github.com/betteroneday/vitepress-lab/edit/main/docs/:path',
      text: '编辑此页'
    }
  }
}
