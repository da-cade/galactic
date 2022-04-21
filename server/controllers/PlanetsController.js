
import { planetsService } from '../services/PlanetsService'
import BaseController from '../utils/BaseController'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)
      .get('/:id', this.getPlanetById)
      .post('', this.createPlanet)
  }

  async getAllPlanets(req, res, next) {
    try {
      const planets = await planetsService.getAllPlanets()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetById(req, res, next) {
    try {
      const planet = await planetsService.getPlanetById(req.params.id)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next) {
    try {
      const newPlanet = await planetsService.createPlanet(req.body)
      res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
}
