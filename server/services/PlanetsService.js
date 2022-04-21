import { dbContext } from '../db/DbContext'

class PlanetsService {
  getAllPlanets() {
    const planet = dbContext.Planets.find({})
    return planet
  }

  getPlanetById(id) {
    const planet = dbContext.Planets.findById(id).populate('star', 'type size name')
    return planet
  }

  createPlanet(body) {
    const newPlanet = dbContext.Planets.create(body)
    return newPlanet
  }
}

export const planetsService = new PlanetsService()
