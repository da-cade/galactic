import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const LocalizationSchema = new Schema({
  speciesId: { type: Schema.Types.ObjectId },
  galaxyId: { type: Schema.Types.ObjectId }
  // starId: { type: Schema.Types.ObjectId },
  // planetId: { type: Schema.Types.ObjectId },
  // moonId: { type: Schema.Types.ObjectId }
}, { toJSON: { virtuals: true } })

LocalizationSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})
