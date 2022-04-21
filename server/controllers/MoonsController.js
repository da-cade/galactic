import { moonsService } from '../services/MoonsService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAllMoons)
      .get('/:id', this.getMoonById)
      .post('', this.createMoon)
  }

  async getAllMoons(req, res, next) {
    try {
      const moons = await moonsService.getAllMoons()
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getMoonById(req, res, next) {
    try {
      const moon = await moonsService.getMoonById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async createMoon(req, res, next) {
    try {
      const newMoon = await moonsService.createMoon(req.body)
      res.send(newMoon)
    } catch (error) {
      next(error)
    }
  }
}
