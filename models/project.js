import mongoose, { model } from "mongoose";

const projectSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a creator"],
  },
  projectName: {
    type: String,
    required: [true, "Please provide a project name"],
  },
  projectCurrency: {
    type: String,
    required: [true, "Please provide a project currency"],
  },
  projectStatus: {
    type: String,
    required: [true, "Please provide a project status"],
  },
  startDate: {
    type: Date,
    required: [true, "Please provide a start date"],
  },
  finishDate: {
    type: Date,
    required: [true, "Please provide a finish date"],
  },
  workingDays: {
    monday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    tuesday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    wednesday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    thursday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    friday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    saturday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
    sunday: {
      type: Number,
      required: [true, "Please provide a number of working hours"],
    },
  },
});

export default mongoose.models.Project || mongoose.model("Project", projectSchema);