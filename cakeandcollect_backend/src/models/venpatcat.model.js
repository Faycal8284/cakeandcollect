// Définir la vue
const v_venpatcat = 'venpatcat';
// Ma requete sql
const query = 'SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS ImageV, v.categorie AS CategorieV, v.note AS Note, v.tel AS Tel, v.descriptions AS DescriptionsV, v.code_promo AS CodePromo, CONCAT(v.rue, v.code_postal, v.ville) AS Adresse,p.nom AS Patisserie, p.img AS ImagePat, p.descriptions AS DescriptionsP, p.prix_u AS Prix, c.nom AS CategoriePat FROM vendeurs v JOIN patisseries p ON v.Id = p.vendeurId JOIN categories c ON p.categorieId = c.Id;';

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

