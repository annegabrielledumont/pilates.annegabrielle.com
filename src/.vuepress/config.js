// vuepress config

var postcss = require('../../postcss.config')

module.exports = {
  title: 'Cours de pilates',
  description: 'par Anne Gabrielle Dumont',
  dest: 'docs',
  themeConfig: {
    home: true,
    search: false,
    logo: '/savoeurs-logo.svg',
    sidebar: [
      ['/cours-en-ligne/', 'Cours en ligne'],
      ['/horaires-lieux-tarifs/', 'Horaires, lieux et tarifs'],
      ['/ateliers/', 'Ateliers'],
      ['/entreprises/', 'Pilates en entreprise'],
      ['/public/', 'Public'],
      ['/bienfaits/', 'Bienfaits'],
      ['/mon-approche/', 'Mon approche']
    ],
    sidebarDepth: 0,
    externalLink: {url:'https://annegabrielle.com', logo: '/savoeurs-logo-white.svg', text:'savoeurs.com'}
  },
  plugins: [
    [
      'container',
      {
        type: 'right',
        before: '<div class="img-right">',
        after: '</div>'
      }
    ],
    [
      'container',
      {
        type: 'left',
        before: '<div class="img-left">',
        after: '</div>'
      }
    ],
    [
      'container',
      {
        type: 'full',
        before: info =>
          info
            ? `<div class="img-full img-full-${info}">`
            : '<div class="img-full">',
        after: '</div>'
      }
    ]
  ],
  extendMarkdown: md => {
    md.use(require('markdown-it-attrs'))
  },
  postcss
}
