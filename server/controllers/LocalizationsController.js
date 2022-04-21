import { localizationsService } from '../services/LocalizationsService'
import BaseController from '../utils/BaseController'

export class LocalizationsController extends BaseController {
  constructor() {
    super('api/localizations')
    this.router
      .get('', this.getAllLocalizations)
      .post('', this.createLocalization)
  }

  async getAllLocalizations(req, res, next) {
    try {
      const locales = await localizationsService.getAllLocalizations()
      res.send(locales)
    } catch (error) {
      next(error)
    }
  }

  async createLocalization(req, res, next) {
    try {
      const newLocale = await localizationsService.createLocalization(req.body)
      res.send(newLocale)
    } catch (error) {
      next(error)
    }
  }
}
