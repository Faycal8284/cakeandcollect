'use strict';
//uploaded file is stored in req.file.buffer. Save it to PostgreSQL with Sequelize ORM:
module.exports = (sequelize, Sequelize) => {
    const files = sequelize.define('files', { 
        type: {
            type: Sequelize.STRING
          },
          name: {
            type: Sequelize.STRING
          },
          data: {
            type: Sequelize.BLOB('long')
          } 
    }); 
    return files;
}