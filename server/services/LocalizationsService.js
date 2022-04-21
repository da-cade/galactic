import { dbContext } from '../db/DbContext'

class LocalizationsService {
  async getAllLocalizations() {
    const locales = await dbContext.Localization.find({})
    return locales
  }

  async createLocalization(body) {
    const newLocale = await dbContext.Localization.create(body)
    return newLocale
  }
}

export const localizationsService = new LocalizationsService()
