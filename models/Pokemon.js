import mongoose from "mongoose";
 
// Buat Schema
const Pokemon = mongoose.Schema({
  id:{
    type: Number,
    required: true
  },
  originName:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  height:{
    type: Number,
    required: true
  },
  weight:{
    type: Number,
    required: true
  }
});
 
// export model
export default mongoose.model('Pokemon', Pokemon);