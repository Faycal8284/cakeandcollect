CREATE DATABASE cakeandcollect_db;

USE cakeandcollect_db;

CREATE TABLE vendeur(
  id_vendeur INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(50),
  prenom VARCHAR(50),
  siret VARCHAR(50),
  email VARCHAR(50),
  mdp VARCHAR(50),
  tel VARCHAR(50),
  categorie VARCHAR(50),
  descriptions VARCHAR(50),
  note VARCHAR(50),
  particulier BOOLEAN,
  actif BOOLEAN,
  rue VARCHAR(50),
  code_postal VARCHAR(50),
  ville VARCHAR(50),
  code_promo VARCHAR(50)
);

CREATE TABLE client(
  id_client INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(50),
  prenom VARCHAR(50),
  email VARCHAR(50),
  mdp VARCHAR(50),
  actif BOOLEAN,
  tel VARCHAR(50),
  rue VARCHAR(50),
  code_postal VARCHAR(50),
  ville VARCHAR(50),
  note_vendeur VARCHAR(50),
  avis_commande VARCHAR(100)
);

CREATE TABLE commande(
  id_commande INT NOT NULL AUTO_INCREMENT,
  id_cli INT,
  titre VARCHAR(50), 
  actif BOOLEAN,
  quantite INT,
  prix_vente FLOAT, 
  date_commande date,
  date_recuperation date,
  FOREIGN KEY (id_cli) REFERENCES client(id_client),
  CONSTRAINT pd_commande PRIMARY KEY(id_commande,id_cli)
);

CREATE TABLE categorie(
  id_categorie INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom VARCHAR(50), 
  descriptions VARCHAR(100),
  img VARCHAR(50)
);

CREATE TABLE patisserie(
  id_patisserie INT NOT NULL AUTO_INCREMENT,
  id_cat INT,
  id_vend INT,
  id_cmd INT,
  nom VARCHAR(50), 
  disponible BOOLEAN, 
  descriptions VARCHAR(100), 
  ingredients VARCHAR(100), 
  prix_u FLOAT, 
  stock BOOLEAN,
  img VARCHAR(50),  
  img1 VARCHAR(50), 
  img2 VARCHAR(50), 
  img3 VARCHAR(50), 
  FOREIGN KEY (id_cat) REFERENCES categorie(id_categorie),
  FOREIGN KEY (id_vend) REFERENCES vendeur(id_vendeur),
  FOREIGN KEY (id_cmd) REFERENCES commande(id_commande),
  CONSTRAINT pd_patisserie PRIMARY KEY(id_patisserie,id_cat)
);