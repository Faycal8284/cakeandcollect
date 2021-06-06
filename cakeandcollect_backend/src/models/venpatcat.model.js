// Définir la vue
const v_venpatcat = 'venpatcat';
// Ma requete sql de création de vue venpatcat dans la bdd
//const v_by_cat = 'SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS imgVendeur, v.categorie AS categorieVendeur, v.note AS noteVendeur, v.tel AS telVendeur, v.descriptions AS descriptionVendeur, v.code_promo AS CodePromo, CONCAT(v.rue , v.code_postal , v.ville ) AS adresseVendeur, v.ville AS villeVendeur, p.Id AS IdPatisserie, p.nom AS Patisserie, p.img AS imagePatisserie, p.descriptions AS descriptionPatisserie, p.prix_u AS Prix, p.ingredients AS ingredientsPatisserie, p.stock AS stockPatisserie, p.disponible AS disponiblePatisserie, c.Id AS IdCategorie, c.nom AS categoriePatisserie FROM vendeurs v JOIN patisseries p ON v.Id = p.vendeurId LEFT JOIN categories c ON p.categorieId = c.Id GROUP BY c.Id;';
const query = 'SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS imgVendeur, v.categorie AS categorieVendeur, v.note AS noteVendeur, v.tel AS telVendeur, v.descriptions AS descriptionVendeur, v.code_promo AS CodePromo, CONCAT(v.rue, v.code_postal, v.ville ) AS adresseVendeur, v.ville AS villeVendeur, v.code_Postal AS codePostalVendeur, v.actif AS actifVendeur, p.Id AS IdPatisserie, p.nom AS Patisserie, p.img AS imagePatisserie, p.img1 AS image1Patisserie, p.img2 AS image2Patisserie, p.img3 AS image3Patisserie, p.descriptions AS descriptionPatisserie, p.prix_u AS Prix, p.ingredients AS ingredientsPatisserie, p.stock AS stockPatisserie, p.disponible AS disponiblePatisserie,  p.quantite AS quantitePatisserie, c.Id AS IdCategorie, c.nom AS categoriePatisserie, c.img AS imageCategorie, c.descriptions AS descriptionCategorie FROM vendeurs v JOIN patisseries p ON v.Id = p.vendeurId JOIN categories c ON p.categorieId = c.Id;'

module.exports = (sequelize, Sequelize) => {
  
  // exécute la requête
  const venpatcat = sequelize.query(`CREATE VIEW ${v_venpatcat} AS ${query}`);
  // Crée la vue dans la base de données
   
  return venpatcat;
}

// table vide const t_venpatcat = sequelize.define('venpatcat', {});

/* module.exports = {
  up: function (database, Sequelize) {
    return database.query(`CREATE VIEW ${view_ven_pat_cat} AS ${query}`);
  },
  down: function (database, Sequelize) {
    return database.query(`DROP VIEW ${view_ven_pat_cat}`);
  }
} */

