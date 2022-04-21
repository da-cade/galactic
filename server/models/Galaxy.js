import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
  type: { type: String },
  size: { type: Number },
  nickname: { type: String }
})
