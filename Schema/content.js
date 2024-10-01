const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentschema = new Schema(
  {
    //   title: String, // String is shorthand for {type: String}
    //   author: String,
    //   body: String,
    //   comments: [{ body: String, date: Date }],
    //   date: { type: Date, default: Date.now },
    //   hidden: Boolean,
    //   meta: {
    //     votes: Number,
    //     favs: Number
    //   }

    title: {
      type: String,
      require:true
    },
    body: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("content", contentschema);
