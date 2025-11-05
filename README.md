# O-Analyzer 📊

O-Analyzer est une application web frontend conçue pour analyser la complexité algorithmique (Big O) du code Python.

Cette application est l'interface utilisateur ("le visage") du projet et fonctionne en consommant le backend **[Complexity-API](https://github.com/pablitogmnz/Complexity-API)**, qui effectue l'analyse statique.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 L'Objectif

Fournir une interface utilisateur simple, rapide et visuelle (la "jauge") pour interagir avec le service d'analyse de complexité. L'utilisateur peut coller son code et obtenir un retour instantané sur sa performance théorique ($\mathcal{O}(n)$, $\mathcal{O}(n^2)$, etc.).

## 🏗️ Architecture Technique

Ce projet est un **client web statique** pur (HTML/JS/CSS). Il n'a pas de backend propre ; il est entièrement découplé de l'API qu'il consomme.

1.  **Interface :** Une page `index.html` unique structurée avec **Bootstrap 5** pour un design responsive et propre (thème sombre).
2.  **Logique :** Un fichier `script.js` gère tous les événements :
    * Récupère le code depuis le `<textarea>`.
    * Utilise l'API `fetch()` (en `async/await`) pour envoyer le code à l'endpoint de `Complexity-API`.
    * Gère les réponses (succès ou erreur) et met à jour dynamiquement le DOM pour afficher les alertes Bootstrap (vertes pour le succès, rouges pour l'erreur).
3.  **Connexion API :** Le script est configuré pour appeler l'API backend (le projet `Complexity-API`) à son adresse réseau.
