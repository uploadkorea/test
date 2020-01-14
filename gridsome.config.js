// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Sapjil',
  siteDescription: '웹 사이트 제작에 필요한, 삽질을 줄일 수 있는 정보를 공유하고자 합니다.',
  siteUrl: 'https://sapjil.net',
  titleTemplate: `%s | Sapjil`,
  icon: 'src/favicon.png',
  touchicon: 'src/apple-touch-icon.png',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'content/posts',
        typeName: 'Post',
        path: '*.md',
        // refs: {
        //   author: 'Author',
        //   tags: {
        //     typeName: 'Tag',
        //     create: true
        //   },
        //   category: {
        //     typeName: 'Category',
        //     create: true
        //   }
        // }
        remark: {
          plugins: [
            [ '@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders' : ['Youtube', 'Twitter', 'Gist'],
          }]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Sapjil Blog',
          feed_url: 'https://sapjil.net/feed.xml',
          site_url: 'https://sapjil.net',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://sapjil.net' + node.path,
          author: node.author,
          date: node.date,
        }),
        output: {
          dir: './static',
          name: 'feed.xml',
        },
      },
    },
  ],
  
  // templates: {
  //   Category: [{
  //     path: '/category/:title',
  //     component: 'src/templates/Category.vue'
  //   }],
  //   Tag: [{
  //     path: '/tag/:title',
  //     component: 'src/templates/Tag.vue'
  //   }]
  // },
  
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}