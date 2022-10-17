# Exercice 5

Pensez à installer la librairie de test jest.

### Partie 1
Cette partie porte sur les fichiers `exceptions.js` & `library.js`
- Lisez attentivement le contenu des fichiers dans le dossier `exo5`
- Créer un dossier test et rédiger les tests unitaires de ces 2 librairies

### Partie 2
Cette partie porte sur le fichier `library.js`

- Ecrivez une méthode qui retourne le livre ayant la meilleure note
  - Essayez de modifier la variable `books` pour avoir 2 livres ayant la même meilleure note, observez le comportement
- Ecrivez une méthode qui permet de retourner la moyenne des notes
- Créez un nouveau fichier `exo5/math.js` et écrivez une méthode qui fait la moyenne du tableau d'entiers passé en paramètre
- Utilisez cette nouvelle méthode dans `library.js` et adaptez vos TU
  - Essayez de mocker ou espionner la méthode que vous avez ajouté a `math.js` dans les TU de `library.js`
- Ecrire une nouvelle méthode `addBook_v2()` qui améliore celle déjà présente
  - En quoi celle présente aurait-elle besoin d'être améliorée ?
  - Adaptez et améliorez vos TU

### Pour aller plus loin

- Essayer de générer un report coverage de vos TU au format HTML