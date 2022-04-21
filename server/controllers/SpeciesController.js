import { speciesService } from '../services/SpeciesService'
import BaseController from '../utils/BaseController'

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAllSpecies)
      .get('/:id', this.getSpeciesById)
      .post('', this.createSpecies)
  }

  async getAllSpecies(req, res, next) {
    try {
      const species = await speciesService.getAllSpecies()
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async getSpeciesById(req, res, next) {
    try {
      const indivSpecies = await speciesService.getSpeciesById(req.params.id)
      res.send(indivSpecies)
    } catch (error) {
      next(error)
    }
  }

  async createSpecies(req, res, next) {
    try {
      const newSpecies = await speciesService.createSpecies(req.body)
      res.send(newSpecies)
    } catch (error) {
      next(error)
    }
  }
}
