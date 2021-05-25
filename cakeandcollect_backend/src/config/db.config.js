module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Faycal8284.",
    DB: "cakeandcollect_db",
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};