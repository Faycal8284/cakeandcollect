'use strict';
module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define('client', { // déf, nom table client, et les param, colonnes table Client
        /* id_client :{
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
        email: {
            type: Sequelize.STRING
        },
        mdp: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        actif: {
            type: Sequelize.BOOLEAN
        },
        rue: {
            type: Sequelize.STRING
        },
        tel: {
            type: Sequelize.STRING
        },
        code_postal: {
            type: Sequelize.INTEGER
        },
        ville: {
            type: Sequelize.STRING
        },
        note_vendeur: {
            type: Sequelize.STRING
        },
        avis_commande: {
            type: Sequelize.STRING
        }
    }); 
    return client;
}

