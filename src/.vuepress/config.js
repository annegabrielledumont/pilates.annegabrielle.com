module.exports = {
  title: 'Cours de pilates',
  description: 'Anne Gabrielle Dumont',
  dest: 'docs',
  themeConfig: {
    home: true,
    search: false,
    nav: [
      // { text: 'Planning et tarifs', link: '/planning-tarifs/' },
      // { text: 'Contact et accès', link: '/contact-acces/' },
      // { text: 'Mon approche', link: '/approche/' },
      // { text: 'Bienfaits du pilates', link: '/bienfaits/' },
      { text: 'annegabrielle.com', link: 'https://annegabrielle.com' }
    ],
    sidebar: [
      '/approche/',
      '/bienfaits/',
      '/planning-tarifs/',
      '/contact-acces/'
    ]
  }
}
