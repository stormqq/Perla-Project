import dbConnect from "../../../config/dbConnect";
import User from "../../../models/user";
import Project from "../../../models/project";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
export default async function handler(req, res) {
    const { pid } = req.query;
    dbConnect();
    
    const session = await getServerSession(req, res, authOptions);
    const findUser = await User.findOne({ email: session.user.email });
    const userId = findUser._id;
    const userProjects = await Project.find({ creator: userId });
    res.status(200).json({ userProjects });
  }