import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
    available: String,
    due: String,
    points: Number,
    availableDate: { type: Date },
    dueDate: { type: Date },
    availableUntil: { type: Date },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
