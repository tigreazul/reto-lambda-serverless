const PlanetRepository = require('../repositories/planetRepository');
const Planet = require('../models/planetModel');


class PlanetService {


    static getPlanetById(id) {
        const datos = PlanetRepository.getById(id);
        return (datos) ? datos.Item : false
    }

    static createPlanet( newPlanet ) {
        
        // const newDatos = new Planet(id, ...newPlanet);
        // console.log(newDatos); 
        PlanetRepository.create(newPlanet);
    }
}

module.exports = PlanetService;