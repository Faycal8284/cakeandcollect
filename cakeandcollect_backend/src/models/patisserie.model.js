module.exports = (sequelize, Sequelize) => {
    const patisserie = sequelize.define('patisserie', { // déf, nom table patisserie, et les param, colonnes table patisserie
        id_patisserie :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
        },
        id_cat: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'categorie',
                key: 'id_categorie',
                as: 'id_cat'
            },
        },
        id_vend: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'vendeur',
                key: 'id_vendeur',
                as: 'id_vend'
            },
        },
        id_cmd: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: 'commande',
                key: 'id_commande',
                as: 'id_cmd'
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