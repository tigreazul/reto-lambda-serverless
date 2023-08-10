const PlanetService = require('../../services/planetService');
const Planet = require('../../models/planetModel');
const { validatePlanet } = require('../../config/validation')
const { db } = require('../config/db.config');

const getPlanetApi = async (event) => {
	try {
        const { id }  = event.pathParameters
        const validationResult = validatePlanet(event.pathParameters);
		if (validationResult.error) {
			return { status: 400, body: { error: validationResult.error.details[0].message } };
		}

		const getPlanetsDats = await PlanetService.getPlanetById(id);
        if (getPlanetsDats) {
            return {
                status: 200,
                body: {
                    getPlanetsDats
                }
            };
        }
        
        const response = await fetch( db.api.swapi + `/planets/${id}` )
        const status = response.status
        const data = await response.json()
        let planet = null
        if (status === 200) {
            planet = new Planet(data,id)
            try {
                const guard = await PlanetService.createPlanet(planet);
            } catch (error) {
                console.log(error)
            }
        }
        return {
            statusCode: status,
            body: JSON.stringify(
                {
                    payload: planet
                }
            )
        }
        
        
	} catch (error) {
        console.log(error)
		return {
			status: 500, 
			body: { error: 'Internal Server Error' }
		};
	}
}
module.exports = { getPlanetApi };