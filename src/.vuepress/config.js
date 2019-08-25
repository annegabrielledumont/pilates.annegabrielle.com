module.exports = {
  title: 'Cours de pilates à Montpellier',
  description: 'par Anne Gabrielle Dumont',
  dest: 'docs',
  themeConfig: {
    home: true,
    search: false,
    nav: [{ text: 'annegabrielle.com', link: 'https://annegabrielle.com' }],
    sidebar: [
      '/public/',
      '/bienfaits/',
      '/mon-approche/',
      '/horaires-lieux-tarifs/',
      '/entreprises/'
    ],
    sidebarDepth: 0
  },
  plugins: [
    ['@vuepress/plugin-active-header-links', { headerTopOffset: 120 }],
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
  postcss: {
    plugins: [
      require('postcss-normalize'),
      require('postcss-import'),
      require('postcss-typescale'),
      require('postcss-font-family-system-ui'),
      require('pixrem')({
        html: false
      }),
      require('postcss-grid-system'),
      require('postcss-grid-fluid'),
      require('postcss-button'),
      require('postcss-inline-svg'),
      require('postcss-color-mod-function'),
      require('postcss-preset-env')({
        stage: 0
      })
    ]
  }
}
