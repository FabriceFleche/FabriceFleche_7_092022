P7 - Créez un réseau social d’entreprise
Projet 7 de la formation de Développeur web d'OpenClassrooms ! La mission consiste à construire un réseau social interne pour les employés de Groupomania.

Installez l'application de Groupomania
Base de donnée
Se connecter à MySQL :
mysql -u root -p (remplacer root par votre nom d'utilisateur, puis saisir le mot de passe)

Dans MySQL : Créer une nouvelle BDD :
CREATE DATABASE nom_de_la_base; (Remplacer "nom_de_la_base" par le nom souhaité)

Dans MySQL : Ajouter les tables à la nouvelle base grace au fichier "Fleche_Fabrice_2_bdd_092022.sql" :
mysql -u root -p nom_de_la_base < import_file .sqlmysql -u USERNAME -p DB_NAME < Fleche_Fabrice_2_bdd_092022.sql

Il vous demandera le mot de passe. Entrez le mot de passe et il commencera à importer les données du fichier SQL.

Backend
Le backend a été crée avec Node.js, Express.js et MySQL comme base de données.

Installation : Dans le terminal de VSCODE, situez-vous dans le dossier "/back". Taper "npm install" pour installer toutes les dépendances du backend.

Development server : Taper "nodemon" pour avoir accès au serveur de développement. L'application va se recharger automatiquement si vous modifiez un fichier source.

Frontend
Le frontend a été crée avec React.js

Installation Dans le dossier "/front", taper "npm install" pour installer toutes les dépendances du frontend.

Development server Taper "npm start" pour avoir accès au serveur de développement. L'application va se recharger automatiquement si vous modifiez un fichier source.

Si le navigateur ne s'ouvre pas automatiquement, allez à :

http://localhost:3000/ ou http://localhost:3001/

Droits Admin
Pour tester les droits d'admin, changez la valeur sur le champ admin dans le tableau "user", de 0 à 1.
