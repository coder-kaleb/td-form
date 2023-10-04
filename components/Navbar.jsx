"use client";

import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { Button } from ".";
import { navigation } from "@/constants";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleRoute = () => {
    router.push("/register");
    setIsOpen(false);
  };
  return (
    <header
      className="shadow-to mt-4 w-full rounded-xl bg-white px-4 py-2 sm:mt-8 sm:py-6"
      id="header font-inter"
    >
      <nav className="">
        {/* Desktop navigation */}
        <div className="hidden items-center justify-between sm:flex">
          <Link href="/" className="select-none">
            <Image
              src="/td-logo.png"
              alt="arrow"
              width={60}
              height={48}
              className="select-none"
            />
          </Link>
          <ul className="hidden gap-x-8 sm:flex">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className=" text-xl font-semibold text-primaryBlack md:text-2xl"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button handleRoute={handleRoute} />
        </div>

        {/* Mobile navigation */}
        <div className="relative flex items-center justify-between sm:hidden">
          <Link href="/">
            <Image src="/td-logo.png" alt="arrow" width={60} height={48} />
          </Link>
          <RiMenu3Line
            className="h-9 w-9 hover:cursor-pointer"
            onClick={() => setIsOpen((pre) => !pre)}
          />
          {isOpen && (
            <div className="absolute right-3 top-6 z-10 flex flex-col gap-4 divide-y rounded-2xl bg-white px-4 pt-3 text-center shadow-md">
              <ul className="flex flex-col gap-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className=" select-none text-xl font-semibold text-primaryBlack "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                onMobiel=" mb-3 text-base px-4 py-2"
                handleRoute={handleRoute}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
