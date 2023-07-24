import mongoose, { Mongoose } from "mongoose";

const imageSchema = new mongoose.Schema({
  user_id:{
    type:String
  },
  created_at: {
    type: String,
  },
  format: {
    type: String,
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
  original_filename: {
    type: String,
  },
  public_id: {
    type: String,
  },
  tags: {
    type: Array,
  },
});


const Image  = mongoose.models.images || mongoose.model("images", imageSchema);
 export default Image;