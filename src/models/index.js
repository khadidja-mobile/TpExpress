const dbConfig = require("./../config/db.config");

const Sequelize = require("sequelize");

// Initialisation nouvelle instance connexion database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

// To be connected
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import de l'entité rocket à mapper (create table rocket avec ses proprietes dans la base) 
db.rocket = require('../models/rocket.model')(sequelize, Sequelize);

module.exports = db;