'use strict';
module.exports = (sequelize, Sequelize) => {
    const commande = sequelize.define('commande', { // déf, nom table commande, et les param, colonnes table commande
        /* id_commande :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
        }, */
        clientId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'clients',
                key: 'id',
                as: 'clientId'
            },
        },
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
    return commande;
}