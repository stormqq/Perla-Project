import Project from "../../models/project";
import User from "../../models/user";
import dbConnect from "../../config/dbConnect";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const {
      projectName,
      projectCurrency,
      projectStatus,
      startDate,
      finishDate,
      workingDays,
      calendarExceptions,
    } = req.body;

    const session = await getServerSession(req, res, authOptions);
    const findUser = await User.findOne({ email: session.user.email });
    try {
      const project = await Project.create({
        creator: findUser._id,
        projectName: projectName,
        projectCurrency: projectCurrency,
        projectStatus: projectStatus,
        startDate: startDate,
        finishDate: finishDate,
        workingDays: workingDays,
        calendarExceptions: calendarExceptions,
      });
      res.status(201).json({ project });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
