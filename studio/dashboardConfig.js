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
                  buildHookId: '604a334185e99b09988f51eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-utm39v1g',
                  apiId: 'f82ed35b-00b8-47e4-be38-39226d28e2ae'
                },
                {
                  buildHookId: '604a3341f00c32075d61db91',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xooqb2px',
                  apiId: 'f9a71977-b1ef-4037-b495-c1ee236135bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MB-Hilo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xooqb2px.netlify.app', category: 'apps'}
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
