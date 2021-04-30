const rocket = require('../models').rocket;

module.exports = {

    async getAllRockets(requete, reponse) {
        try{
            const {rocketId} = requete.params; // const rocketId = requete.params.rocketId;

            const rocketCollection = await rocket.findOne({
                id: requete.params.rocketId
            });
            if(rocketCollection) {

                const rocketCollection = await rocket.findAll({
                    //where: { rocketId: rocketId }
                })

                reponse.status(201).send(rocketCollection);
            }
            else {
                reponse.status(404).send("Rocket not Found !!!")
            }
        }
        catch(erreur){
            console.log(erreur);
            reponse.status(500).send(erreur);
        }
    },

    async getOneRocket(requete, reponse) {
        var id = requete.params.rocketId;
        const {rocketId} = requete.params;
        
            const rocketCollection = await rocket.findByPk(id);

            if (rocketCollection != null) {

                const Rocket = await rocket.findByPk(id);

                if (Rocket) {
                    reponse.status(201).send(rocket);
                }
                else {
                    reponse.status(404).send("Rocket Not Found");
                }
            }
            else {
                reponse.status(404).send("Rocket Not Found")
            }
        

    },

    async createRocket(requete, reponse) {

        try{
            const rocketCollection = await rocket.findOne({
                id: requete.params.rocketId
            });
            if(rocketCollection){
                const rocketCreated = await rocket.create({
                    nom: requete.body.nom,
                    fabrication: requete.body.fabrication,
                    organisation: requete.body.organisation,
                    destination: requete.body.destination
                })
                reponse.status(201).send(rocketCreated)
            }
            else{
                resizeBy.status(404).send("Rocket Not Found")
            }
        }
        catch(erreur){
            console.log(erreur);
            reponse.status(400).send(erreur);
        }
    },



}