SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS ImageV, v.categorie AS CategorieV, v.note AS Note, v.tel AS Tel, 
v.descriptions AS DescriptionsV, v.code_promo AS CodePromo, CONCAT(v.rue, v.code_postal, v.ville) AS Adresse,
 p.nom AS Patisserie, p.img AS ImagePat, p.descriptions AS DescriptionsP, p.prix_u AS Prix,
 c.nom AS CategoriePat
FROM vendeurs v
JOIN patisseries p ON v.Id = p.vendeurId
JOIN categories c ON p.categorieId = c.Id;

CREATE VIEW V_VendeursPatisseriesCategories AS
SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS ImageV, v.categorie AS CategorieV, v.note AS Note, v.tel AS Tel, 
v.descriptions AS DescriptionsV, v.code_promo AS CodePromo, CONCAT(v.rue, v.code_postal, v.ville) AS Adresse,
 p.nom AS Patisserie, p.img AS ImagePat, p.descriptions AS DescriptionsP, p.prix_u AS Prix,
 c.nom AS CategoriePat
FROM vendeurs v
JOIN patisseries p ON v.Id = p.vendeurId
JOIN categories c ON p.categorieId = c.Id;