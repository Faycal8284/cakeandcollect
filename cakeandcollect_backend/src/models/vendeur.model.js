'use strict';
module.exports = (sequelize, Sequelize) => {
    const vendeur = sequelize.define('vendeur', { // création table vendeur avec ses champs
        /* id_vendeur :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
        }, */
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        siret: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        mdp: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        categorie: {
            type: Sequelize.STRING
        },
        note: {
            type: Sequelize.INTEGER
        },
        code_promo: {
            type: Sequelize.STRING
        },
        particulier: {
            type: Sequelize.BOOLEAN
        },
        tel: {
            type: Sequelize.INTEGER
        },
        actif: {
            type: Sequelize.BOOLEAN
        },
        rue: {
            type: Sequelize.STRING
        },
        code_postal: {
            type: Sequelize.INTEGER
        },
        ville: {
            type: Sequelize.STRING
        }
    }); 
    return vendeur;
}