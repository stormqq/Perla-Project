import User from "../../models/user";
import dbConnect from "../../config/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ error: "Please enter all fields" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ error: "User already exists" });
    }

    const user = await User.create({ email, password });

    res.status(201).json({ user });
  }
}
