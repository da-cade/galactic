import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema({
  type: { type: String },
  size: { type: Number },
  name: { type: String },
  parentGalaxy: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
}, { toJSON: { virtuals: true } }
)

StarSchema.virtual('galaxy', {
  localField: 'parentGalaxy',
  foreignField: '_id',
  justOne: true,
  ref: 'Galaxy'
})
