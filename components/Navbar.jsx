"use client";

import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className="mt-4 w-full rounded-xl bg-white px-4 py-2 shadow-to sm:mt-8 sm:py-6"
      id="header font-inter"
    >
      <nav className="bg-white">
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
          <Link
            className=" rounded-lg bg-primaryBlack px-4 py-3 text-xl tracking-wide text-white"
            href="/register"
          >
            Register
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="relative flex items-center justify-between sm:hidden">
          <Link href="/">
            <Image src="/td-logo.png" alt="arrow" width={60} height={48} />
          </Link>
          {toggle ? (
            <AiOutlineClose
              className="h-9 w-9 text-primaryBlack hover:cursor-pointer"
              onClick={() => {
                setIsOpen((pre) => !pre);
                setToggle((pre) => !pre);
              }}
            />
          ) : (
            <RiMenu3Line
              className="h-9 w-9 text-primaryBlack hover:cursor-pointer"
              onClick={() => {
                setIsOpen((pre) => !pre);
                setToggle((pre) => !pre);
              }}
            />
          )}

          {isOpen && (
            <div className="absolute right-4 top-10 z-10 flex flex-col gap-2 divide-y rounded-2xl bg-white px-4 pt-3 text-center shadow-md">
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
              <Link
                className=" mb-3 rounded-md bg-primaryBlack px-2 py-1 text-xl tracking-wide text-white"
                href="/register"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
