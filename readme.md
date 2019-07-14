# pilates.annegabrielle.com

## Technologies

- [vuepress](https://vuepress.vuejs.org/)
- [Vue-cli / webpack](https://cli.vuejs.org/)
- [Babel](https://babeljs.io/)
- [Postcss](https://postcss.org/)
- [Postcss-preset-env](https://preset-env.cssdb.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Standardjs](https://standardjs.com/)
- [Stylelint](https://stylelint.io/)

---

## Pré-requis

Pour travailler sur ce projet, il faut :

- un éditeur de texte
- Git (logiciel de contrôle de version)
- Node.js (moteur d’execution javascript) et npm (gestionnaire de paquets javascript)

### [VS Code](https://code.visualstudio.com/)

Se rendre sur le site de [VS Code](https://code.visualstudio.com/) et télécharger l'application.

### [Homebrew](https://brew.sh/)

Homebrew est un gestionnaire de paquets pour Mac. Il va permettre d'installer Git et Node.js.

Pour installer Homebrew, dans le terminal, saisir :

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

### [Git](https://git-scm.com/)

Git s'installe avec homebrew avec la commande `brew install git`.

### [Node.js](https://nodejs.org) et [npm](https://www.npmjs.com/)

Node.js et npm s’installent avec homebrew: `brew install node`.

---

## Usage

### Cloner le repo

Dans le terminal, se positionnner à l'endroit ou l'on veut stocker le projet (pe: `/Documents`) puis saisir `git clone https://github.com/annegabrielledumont/pilates.annegabrielle.com.git`.

### Installation

```bash
# installe les dépendances
npm install
```

### Développement

```bash
# lance un serveur de développement
npm run dev
```

### Production

```bash
# crée les fichiers de production dans le répertoire dist
npm run build
```
