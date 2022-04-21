import { dbContext } from '../db/DbContext'

class MoonsService {
  getAllMoons() {
    const moons = dbContext.Moons.find({})
    return moons
  }

  getMoonById(id) {
    const moon = dbContext.Moons.findById(id).populate('planet', 'name water solarDay parentStar')
    return moon
  }

  createMoon(body) {
    const newMoon = dbContext.Moons.create(body)
    return newMoon
  }
}

export const moonsService = new MoonsService()
