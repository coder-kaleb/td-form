"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  router.push("/register");
  return (
    <h1 className="mt-10 text-center text-4xl font-bold">
      Home page coming soon
    </h1>
  );
};

export default Home;
