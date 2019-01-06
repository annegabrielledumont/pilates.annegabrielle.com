module.exports = {
  title: 'Cours de pilates à Montpellier',
  description: 'par Anne Gabrielle Dumont',
  dest: 'docs',
  themeConfig: {
    home: true,
    search: false,
    nav: [{ text: 'annegabrielle.com', link: 'https://annegabrielle.com' }],
    sidebar: [
      '/public-et-bienfaits/',
      '/entreprises/',
      '/mon-approche/',
      '/horaires-lieux-tarifs/'
    ]
  },
  plugins: [
    '@vuepress/plugin-search',
    require('./plugins/plugin-active-header-links')
  ],
  postcss: {
    plugins: [
      require('postcss-normalize'),
      require('postcss-import'),
      require('postcss-preset-env')({
        stage: 0
      }),
      require('postcss-typescale'),
      require('postcss-font-family-system-ui'),
      require('pixrem')({
        html: false
      }),
      require('postcss-grid-system'),
      require('postcss-grid-fluid'),
      require('postcss-button'),
      require('postcss-inline-svg')
    ]
  }
}
