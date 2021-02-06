export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '601de11a8bacca86a232fe9e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9gu46qdd',
                  apiId: '756ea812-b985-4bdf-8752-e6edddcb69d5'
                },
                {
                  buildHookId: '601de11aa96f4cbba317c247',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-k82p2a7s',
                  apiId: '4bf11f50-adc6-4645-93ea-5ff8bbe37801'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/monmartens/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-k82p2a7s.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
