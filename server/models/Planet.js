import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  type: { type: String },
  size: { type: Number },
  name: { type: String },
  water: { type: Boolean },
  solarDay: { type: Number },
  parentStar: { type: Schema.Types.ObjectId, ref: 'Star', required: true }
}, { toJSON: { virtuals: true } }
)

PlanetSchema.virtual('star', {
  localField: 'parentStar',
  foreignField: '_id',
  justOne: true,
  ref: 'Star'
})
