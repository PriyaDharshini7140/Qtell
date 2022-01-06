const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const QuestionSchema = new Schema(
  {
    createdby: { type: Schema.ObjectId, ref: "users" },
    modifiedby: { type: Schema.ObjectId, ref: "users" },
    approvedby: { type: Schema.ObjectId, ref: "users" },
    type_id: { type: Schema.ObjectId, ref: "types" },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    option1: { type: String },
    option2: { type: String },
    option3: { type: String },
    option4: { type: String },
    is_active: { type: Boolean, default: true },
    is_approved: { type: Boolean, default: false },
    approved_on: { type: Date },
  },
  { timestamps: true }
);
module.exports = Question = mongoose.model("questions", QuestionSchema);
