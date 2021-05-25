'use strict';
module.exports = (sequelize, Sequelize) => {
    //commandes.belongsTo(clients); // Will add id_cli to commande
    const commande = sequelize.define('commande', { // déf, nom table commande, et les param, colonnes table commande
        id_commande :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
        },
        // id_cli :{
        //     type:  Sequelize.INTEGER,
        //             foreignKey: true
        // },
        titre: {
            type: Sequelize.STRING
        },
        actif: {
            type: Sequelize.BOOLEAN
        },
        quantite: {
            type: Sequelize.INTEGER
        },
        prix_vente: {
            type: Sequelize.FLOAT,
        },
        date_commande: {
            type: Sequelize.DATE,
        },
        date_recuperation: {
            type: Sequelize.DATE,
        }
    }); 
    //commandes.belongsTo(clients); // Will add id_cli to commandes
    return commande;
}