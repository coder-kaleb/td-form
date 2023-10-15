import "./globals.css";

import { Navbar } from "@/components";

export const metadata = {
  title: "Student Form",
  themeColor: "#2A2A2A",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className=" bg-white">
        <main className="min-h-screen px-5 lg:px-32">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
