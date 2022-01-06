const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionTypeSchema = new Schema(
  {
    type: { type: String, required: true },
    createdby: { type: Schema.ObjectId, ref: "users" },
    modifiedby: { type: Schema.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
module.exports = Type = mongoose.model("types", QuestionTypeSchema);
