const mongoose = require("mongoose");
const videoSchema = mongoose.Schema({
  video_title: {
    type: String,
  },
  description: {
    type: String,
  },
  thumbnails:{
    type:String
  }
},{timeStapm:true});

module.exports = mongoose.model("video", videoSchema);
