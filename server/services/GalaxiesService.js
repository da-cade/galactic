import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async createGalaxy(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }

  async getAllGalaxies() {
    const galaxies = await dbContext.Galaxies.find({})
    return galaxies
  }

  async getGalaxyById(id) {
    const galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy) {
      throw new BadRequest('Galaxy not found')
    }
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()
