import "./globals.css";

import { Navbar } from "@/components";

export const metadata = {
  title: "Student Form",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="px-5 lg:px-32 ">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
