import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .get('/:id', this.getStarById)
      // .get('/')
      .post('', this.createStar)
  }

  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getStarById(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const newStar = await starsService.createStar(req.body)
      res.send(newStar)
    } catch (error) {
      next(error)
    }
  }
}
