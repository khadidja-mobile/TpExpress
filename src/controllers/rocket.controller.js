const rocket = require('../models').rocket;
//const db = require('../models');

module.exports = {
// Afficher toutes les fusées
    async getAllRockets(requete, reponse) {
        //const id = requete.params.id;
        try{
            //const {rocketId} = requete.params; // const rocketId = requete.params.rocketId;
            const rocketCollection = await rocket.findOne();

            if(rocketCollection) {

                const rocketCollection = await rocket.findAll()

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
// Afficher la fusée à l'id = id
    async getOneRocket(requete, reponse) {
        //const {rocketId} = requete.params;
        const id = requete.params.id;
        try{
            const Rocket = await rocket.findByPk(id);
            if(Rocket) {
                const Rocket = await rocket.findByPk(id);
                
                reponse.status(201).send(Rocket);
            }
            else {
                reponse.status(404).send("Rocket not Found !!!")
            }
        }
        catch(erreur){
            console.log(erreur);
            reponse.status(500).send(erreur);
        }

        // try {
        //     //const Rocket = await rocket.findByPk((id));
        //      const Rocket = await rocket.findOne(({
        //          where: { id: id }
        //     }));

        //     if (Rocket) {
        //         reponse.status(201).send(rocket);
        //         console.log(reponse);
        //     }
        //     else {
        //         reponse.status(404).send("Rocket Not Found");
        //     }
        // }
        // catch (erreur) {
        //     console.log(erreur);
        //     reponse.status(400).send(erreur);
        // }

    },
// Créer une fusée
    async createRocket(requete, reponse) {
        //const id = requete.params.id;
        try{
            //const Rocket = await rocket.findOne({   id: id  })
            const Rocket = await rocket.findOne()
                if(Rocket){
                const Rocket = await rocket.create({
                    nom: requete.body.nom,
                    fabrication: requete.body.fabrication,
                    organisation: requete.body.organisation,
                    destination: requete.body.destination
                })
                reponse.status(201).send(Rocket)
            }
            else{
                reponse.status(404).send("Rocket Not Found")
            }
        }
        catch(erreur){
            console.log(erreur);
            reponse.status(400).send(erreur);
        }
    },
// Mettre à jour une fusée
    async updateRocket(requete, reponse) {
        //const {rocketId} = req.params; // ou const rocketId = req.params.rocketId; en ES5
        const id = requete.params.id;
        try {
            const Rocket = await rocket.findByPk(id);
                if (Rocket) {
                    const updatedRocket = await Rocket.update(requete.body, { where: {  id: id  } })
                    // const updatedRocket = await Rocket.update({
                    //     nom: requete.body.nom,
                    //     fabrication: requete.params.fabrication,
                    //     organisation: requete.params.organisation,
                    //     destination: requete.params.destination
                    // })

                    reponse.status(201).send(updatedRocket);
                }
                else {
                    reponse.status(404).send("Rocket Not Found");
                }
        }
        catch (erreur) {
            console.log(erreur);
            reponse.status(400).send(erreur);
        }

    },
// Supprimer une fusée
    async deleteRocket(requete, reponse) {

        // const {rocketId} = requete.params; 
        const id = requete.params.id;
        try {
            const Rocket = await rocket.findByPk(id);

            if (Rocket) {

                const deletedRocket = await rocket.findOne({
                    where: { id: id } // condition importante
                })

                if (deletedRocket) {
                    deletedRocket.destroy();
                    reponse.status(201).send("Deleted Rocket");
                }
                else {
                    reponse.status(404).send("Rocket Not Found");
                }
            }
            else {
                requete.status(404).send("Rocket Not Found")
            }
        }
        catch (erreur) {
            console.log(erreur);
            reponse.status(400).send(erreur);
        }

    }

}