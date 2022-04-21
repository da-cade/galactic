import { dbContext } from '../db/DbContext'

class SpeciesService {
  async getSpeciesByGalaxy(galaxyId) {
    // const species = this.getAllSpecies({})
    const galaticSpecies = await dbContext.Localization.findOne({ galaxyId: galaxyId }).populate('galaxy')
    return galaticSpecies
  }

  async getAllSpecies() {
    const species = await dbContext.Species.find({})
    return species
  }

  async getSpeciesById(id) {
    const indivSpecies = await dbContext.Species.findById(id)
    return indivSpecies
  }

  async createSpecies(body) {
    const newSpecies = await dbContext.Species.create(body)
    return newSpecies
  }
}

export const speciesService = new SpeciesService()
