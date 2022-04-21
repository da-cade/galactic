import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const SpeciesSchema = new Schema({
  name: { type: String },
  homeworld: { type: Schema.Types.ObjectId },
  language: { type: String },
  population: { type: Number }
})
