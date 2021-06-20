'use strict';
module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define('contact', { 
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        mail: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        }
        
    }); 
    return contact;
}