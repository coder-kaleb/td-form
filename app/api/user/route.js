import { User } from "@/models/user";
import { connectDB } from "@/mongodb";

export const POST = async (req) => {
  const { fullName, phoneNumber, classAndSection, team, gender } =
    await req.json();
  try {
    await connectDB();
    const exist = await User.findOne({ phoneNumber: phoneNumber });
    if (exist) return new Response("User already exists", { status: 409 });
    const user = await User.create({
      fullName: fullName,
      phoneNumber: phoneNumber,
      classAndSection: classAndSection,
      team: team,
      gender: gender,
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(`User already exist: ${error.message}`, {
      status: 500,
    });
  }
};
