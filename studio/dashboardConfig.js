export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6069e0a0efe9f2102d521098',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tjy2m3tx',
                  apiId: '7be8aa9e-3b1a-4753-b351-92b823c0b411'
                },
                {
                  buildHookId: '6069e0a0bdb3c60fe404872f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rko2kos4',
                  apiId: 'e7071d2c-c4df-4e4b-a7de-b083aad271d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AliKdhim87/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rko2kos4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
