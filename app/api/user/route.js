import { User } from "@/models/user";
import { connectDB } from "@/utils/index";

// export const GET = async (req, res) => {};

export const POST = async (req) => {
  const { firstName, lastName } = await req.json();
  try {
    await connectDB();

    const user = await User.create({
      fullName: `${firstName} ${lastName}`,
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response(`Something went wrong: ${error.message}`, {
      status: 500,
    });
  }
};
