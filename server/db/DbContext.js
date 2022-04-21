import mongoose, { mongo } from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy'
import { LocalizationSchema } from '../models/Localization'
import { MoonSchema } from '../models/Moon'
import { PlanetSchema } from '../models/Planet'
import { SpeciesSchema } from '../models/Species'
import { StarSchema } from '../models/Star'
import { ValueSchema } from '../models/Value'

class DbContext {
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Moons = mongoose.model('Moon', MoonSchema)
  Species = mongoose.model('Species', SpeciesSchema)
  Localization = mongoose.model('Localization', LocalizationSchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
