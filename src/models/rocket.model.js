module.exports = (sequelize, Sequelize) => {
    const rocket = sequelize.define('rockets', { // déf, nom table fusee, et les param, colonnes table fusée
        id :{
            type:  Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
        },
        nom: {
            type: Sequelize.STRING
        },
        fabrication: {
            type: Sequelize.STRING
        },
        organisation: {
            type: Sequelize.STRING
        },
        destination: {
            type: Sequelize.STRING
        }
    }); 
    return rocket;
}