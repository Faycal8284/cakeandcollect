# Commandes pour tester la vue avant création avec sequelize
SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS imgVendeur, v.categorie AS categorieVendeur, v.note AS noteVendeur, v.tel AS telVendeur, 
v.descriptions AS descriptionVendeur, v.code_promo AS CodePromo, CONCAT(v.rue, ' ', v.code_postal, ' ', v.ville ) AS adresseVendeur, v.ville AS villeVendeur, v.code_Postal AS codePostalVendeur, v.actif AS actifVendeur,
p.Id AS IdPatisserie, p.nom AS Patisserie, p.img AS imagePatisserie, p.img1 AS image1Patisserie, p.img2 AS image2Patisserie, p.img3 AS image3Patisserie, p.descriptions AS descriptionPatisserie, p.prix_u AS Prix, p.ingredients AS ingredientsPatisserie, p.stock AS stockPatisserie, p.disponible AS disponiblePatisserie,  p.quantite AS quantitePatisserie,
c.Id AS IdCategorie, c.nom AS categoriePatisserie, c.img AS imageCategorie, c.descriptions AS descriptionCategorie
FROM vendeurs v
JOIN patisseries p ON v.Id = p.vendeurId
JOIN categories c ON p.categorieId = c.Id;

#Grouper les vendeurs par Catégorie
SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS imgVendeur, v.categorie AS categorieVendeur, v.note AS noteVendeur, v.tel AS telVendeur, 
v.descriptions AS descriptionVendeur, v.code_promo AS CodePromo, CONCAT(v.rue, ' ', v.code_postal, ' ', v.ville ) AS adresseVendeur, v.ville AS villeVendeur, v.code_Postal AS codePostalVendeur, v.actif AS actifVendeur,
p.Id AS IdPatisserie, p.nom AS Patisserie, p.img AS imagePatisserie, p.img1 AS image1Patisserie, p.img2 AS image2Patisserie, p.img3 AS image3Patisserie, p.descriptions AS descriptionPatisserie, p.prix_u AS Prix, p.ingredients AS ingredientsPatisserie, p.stock AS stockPatisserie, p.disponible AS disponiblePatisserie,  p.quantite AS quantitePatisserie,
c.Id AS IdCategorie, c.nom AS categoriePatisserie, c.img AS imageCategorie, c.descriptions AS descriptionCategorie
FROM vendeurs v
JOIN patisseries p ON v.Id = p.vendeurId
LEFT JOIN categories c ON p.categorieId = c.Id
GROUP BY c.Id;

# la vue venpatcat avec sequelize
CREATE VIEW V_VendeursPatisseriesCategories AS
SELECT v.Id AS IdVendeur, v.nom AS Vendeur, v.img AS imgVendeur, v.categorie AS categorieVendeur, v.note AS noteVendeur, v.tel AS telVendeur, 
v.descriptions AS descriptionVendeur, v.code_promo AS CodePromo, CONCAT(v.rue, ' ', v.code_postal, ' ', v.ville ) AS adresseVendeur, v.ville AS villeVendeur, v.code_Postal AS codePostalVendeur, v.actif AS actifVendeur,
p.Id AS IdPatisserie, p.nom AS Patisserie, p.img AS imagePatisserie, p.img1 AS image1Patisserie, p.img2 AS image2Patisserie, p.img3 AS image3Patisserie, p.descriptions AS descriptionPatisserie, p.prix_u AS Prix, p.ingredients AS ingredientsPatisserie, p.stock AS stockPatisserie, p.disponible AS disponiblePatisserie,  p.quantite AS quantitePatisserie,
c.Id AS IdCategorie, c.nom AS categoriePatisserie, c.img AS imageCategorie, c.descriptions AS descriptionCategorie
FROM vendeurs v
JOIN patisseries p ON v.Id = p.vendeurId
LEFT JOIN categories c ON p.categorieId = c.Id
GROUP BY c.Id;