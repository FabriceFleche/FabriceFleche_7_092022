P7 - Créez un réseau social d’entreprise

Projet 7 de la formation de Développeur web d'OpenClassrooms ! La mission consiste à construire un réseau social interne pour les employés de Groupomania.

Installez l'application de Groupomania : Installation recommandée avec VSCode



A) Base de donnée

1) Se connecter à MySQL :
mysql -u root -p (remplacer root par votre nom d'utilisateur, puis saisir le mot de passe)

2) Dans MySQL : Créer une nouvelle BDD :
CREATE DATABASE nom_de_la_base; (Remplacer "nom_de_la_base" par le nom souhaité)

Dans MySQL : Ajouter les tables à la nouvelle base grace au fichier "Fleche_Fabrice_2_bdd_092022.sql" :
mysql -u root -p nom_de_la_base < import_file .sqlmysql -u USERNAME -p DB_NAME < Fleche_Fabrice_2_bdd_092022.sql

Il vous demandera le mot de passe. Entrez le mot de passe et il commencera à importer les données du fichier SQL.



B) Backend

Le backend a été crée avec Node.js, Express.js et MySQL comme base de données.

Installation : Dans le terminal de VSCODE, situez-vous dans le dossier "/back". Taper "npm install" pour installer toutes les dépendances du backend.

Copier le dossier "backend" de GITHub dans le dossier "backend" de VSCode

Taper "nodemon" depuis la base du dossier "backend" pour avoir accès au serveur de développement. L'application va se recharger automatiquement si vous modifiez un fichier source.



C) Frontend

Le frontend a été crée avec React.js

INSTALLATION :
Dans le terminal de VSCode, taper la commande : npx create-react-app groupomania

Copier le dossier "frontend" de GitHub dans le dossier "frontend" de VSCode

Dans le dossier "/front", taper "npm start" pour lancer l'application.

Si le navigateur ne s'ouvre pas automatiquement, allez à :

http://localhost:3000/ ou http://localhost:3001/



D) Droits Admin

Pour tester les droits administrateur, changez la valeur du champ "admin" dans le tableau "user" de la BDD, de 0 à 77.
Pour visualiser le mode "administrateur", vous devez cliquer sur "admin" dans le "footer"
