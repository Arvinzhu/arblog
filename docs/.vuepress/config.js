module.exports = {
  title: 'Ar Blog',
  description: 'Just a blog',
  head: [
    [['link',{rel: 'icon', href: '/favicon.ico'}]
  ],
  base: '/',
  host: '118.24.15.173',
  theme: 'awesome',
  search: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend',
        items: [
          { text: 'css', link: '/css/' },
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' }
        ] 
      },
      { text: 'Github', link: 'https://www.github.com/' }
    ],
    sidebar: {
      '/css/': [
	{
         title: 'front css',
	 collapsable: true,
         children: [
	  '/css/demo',
          '/css/dem2'
	 ]
        }
      ],
      '/vue/':[
	{
         title: 'front vue',
	 collapsable: true,
         children: [
	  '/vue/demo',
          '/vue/dem2'
	 ]
        }
      ]
    }
  },
  sidebarDepth: 2,
  lastUpdated: 'Last Updated',
  serviceWorker: true
}
