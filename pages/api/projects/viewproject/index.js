import dbConnect from "@/config/dbConnect";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
    res.status(200).json({ message: "Hello" });
    }