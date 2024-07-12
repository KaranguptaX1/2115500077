const mongoose=require("mongoose")
const {Schema}=mongoose

const guitarSchema = new Schema({
    Type:{type:String,
    required:true,
    trim:true},
    Color:{type:String,
      required:true,
      trim:true},
    Material:{type:String,
      required:true,
      trim:true},
    Brand:{type:String,
      required:true,
      trim:true},
    Price:{type:String,
      required:true,
      trim:true}
  })

  const Guitar = mongoose.model('guitar', guitarSchema);
  module.exports=Guitar