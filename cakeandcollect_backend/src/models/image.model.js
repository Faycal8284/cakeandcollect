'use strict';
module.exports = (sequelize, Sequelize) => {
    const image = sequelize.define('image', { 
        filename: {
            type: Sequelize.STRING
          },
          originalName: {
            type: Sequelize.STRING
          },
          desc: {
            type: Sequelize.STRING
          } 
    }); 
    return image;
}