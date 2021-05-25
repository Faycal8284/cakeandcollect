'use strict';
module.exports = (sequelize, Sequelize) => {
    const vendeur = sequelize.define('vendeur', { // déf, nom table vendeur, et les param, colonnes table vendeur
        id_vendeur :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
        },
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
        particulier: {
            type: Sequelize.BOOLEAN
        },
        actif: {
            type: Sequelize.BOOLEAN
        },
        rue: {
            type: Sequelize.STRING
        },
        code_postal: {
            type: Sequelize.STRING
        },
        ville: {
            type: Sequelize.STRING
        },
        code_promo: {
            type: Sequelize.STRING
        }
    }); 
    return vendeur;
}