import { dbContext } from '../db/DbContext'

class StarsService {
  async getAllStars() {
    const stars = await dbContext.Stars.find({})
    return stars
  }

  async getStarById(id) {
    const star = await dbContext.Stars.findById(id).populate('galaxy', 'size nickname')
    return star
  }

  async createStar(body) {
    const newStar = await dbContext.Stars.create(body)
    return newStar
  }
}

export const starsService = new StarsService()
