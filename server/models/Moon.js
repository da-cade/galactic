import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MoonSchema = new Schema({
  size: { type: Number },
  name: { type: String },
  water: { type: Boolean },
  atmosphere: { type: Boolean },
  solarDay: { type: Number },
  parentPlanet: { type: Schema.Types.ObjectId, ref: 'Planet', required: true }
}, { toJSON: { virtuals: true } }
)

MoonSchema.virtual('planet', {
  localField: 'parentPlanet',
  foreignField: '_id',
  justOne: true,
  ref: 'Planet'
})
