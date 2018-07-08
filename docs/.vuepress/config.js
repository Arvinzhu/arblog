module.exports = {
  title: 'Ar Blog',
  description: 'Just personal blog',
  head: [
    ['link',{rel: 'icon', href: '/favicon.ico'}]
  ],
  port: 18080,
  base: '/',
  dest: './dist',
  search: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Frontend',
        items: [
          { text: 'css', link: '/css/' },
          { text: 'vue', link: '/vue/' }
        ] 
      },
      { text: 'Backend',
        items: [
          { text: 'java', link: '/java/' }
        ] 
      },
      { text: 'tools', link: '/tools/' },
      { text: 'Github', link: 'https://github.com/Arvinzhu' }
    ],
    sidebar: {
	    '/blog/': [
        '',
        'git',
        'vuepress'
      ],
      '/java/': [
        '',
      ],
      '/tools/': [
        '',
      ],
      '/css/': [
        '',
      ],
      '/vue/': [
        '',
      ],
      '/react/': [
        '',
      ]
    }
  },
  sidebarDepth: 2,
  lastUpdated: 'Last Updated',
  serviceWorker: true
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'git',
        'vuepress'
      ]
    }
  ]
}