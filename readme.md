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

Dans le terminal :

- se positionnner à l'endroit ou l'on veut stocker le projet (p.e.: `/Documents`)
- saisir `git clone https://github.com/annegabrielledumont/pilates.annegabrielle.com.git`

### Ouvrir le projet dans VS Code

Dans le finder, ouvrir le dossier du projet dans VS Code en tirant le dossier `pilates.annegabrielle.com` sur l'icone de VS Code.

Dans VS Code, ouvrir un terminal (menu > terminal > lancer un terminal).

### Installer

```bash
# installe les dépendances et mises à jour
npm install
```

### Développer

```bash
# lance la version de développement
npm run dev
```

`ctrl` + `c` pour arrêter

### Générer le site

```bash
# Construit la version de prod dans le dossier /docs
npm run build
```

### Pousser sur Github

```bash
# commit des modifications en cours

# récupère la dernière version sur github
git pull --rebase origin master

# pousse sur GitHub
git push origin master
```
*** 

### Modifier le menu

Dans le fichier `src/.vuepress/config.js`, `themeConfig/sidebar`.

***

### Largeur des images de la homepage

- mobile : 352px
- tablette : 764px
- desktop : 1492px

Les images se trouvent dans le dossier `/src/.vuepress/public`.
Les images sont appelées depuis le fichier `/src/index.md`.

