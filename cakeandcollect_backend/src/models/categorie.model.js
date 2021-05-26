'use strict';
module.exports = (sequelize, Sequelize) => {
    const categorie = sequelize.define('categorie', { // déf, nom table categorie, et les param, colonnes table categorie
        /* id_categorie :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
        }, */
        nom: {
            type: Sequelize.STRING
        },
        descriptions: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        }
        
    }); 
    return categorie;
}