'use strict';
module.exports = (sequelize, Sequelize) => {
    const patisserie = sequelize.define('patisserie', { // déf, nom table patisserie, et les param, colonnes table patisserie
        /* id_patisserie :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
        }, */
        vendeurId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'vendeurs',
                key: 'id',
                as: 'vendeurId'
            },
        },
        categorieId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'categories',
                key: 'id',
                as: 'categorieId'
            },
        },
        commandeId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'commandes',
                key: 'id',
                as: 'commandeId'
            },
        },
        nom: {
            type: Sequelize.STRING
        },
        disponible: {
            type: Sequelize.BOOLEAN
        },
        descriptions : {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
        prix_u: {
            type: Sequelize.FLOAT
        },
        stock: {
            type: Sequelize.BOOLEAN
        },
        img: {
            type: Sequelize.STRING
        },
        img1: {
            type: Sequelize.STRING
        },
        img2: {
            type: Sequelize.STRING
        },
        img3: {
            type: Sequelize.STRING
        }
        
    }); 
    return patisserie;
}