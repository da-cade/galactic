import { galaxiesService } from '../services/GalaxiesService'
import { speciesService } from '../services/SpeciesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAllGalaxies)
      .get('/:id', this.getGalaxyById)
      .get('/:id/species', this.getSpeciesByGalaxy)
      .post('', this.createGalaxy)
  }

  async getSpeciesByGalaxy(req, res, next) {
    try {
      const galaxyId = req.params.id
      const species = await speciesService.getSpeciesByGalaxy(galaxyId)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const newGalaxy = await galaxiesService.createGalaxy(req.body)
      res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async getAllGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAllGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const id = req.params.id // params is the request as HTML header.
      const galaxy = await galaxiesService.getGalaxyById(id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
