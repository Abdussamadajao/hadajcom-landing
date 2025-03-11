"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-30 pointer-events-auto ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }  transition-colors duration-300`}
    >
      <nav className="h-full w-full flex justify-between items-center py-4 container-custom pointer-events-auto">
        <Link
          href={"/"}
          className="z-50"
          onClick={() => {
            if (isNavOpen) setIsNavOpen(false);
          }}
        >
          <h1
            className={`text-xl font-bold  ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Hadajcom
          </h1>
        </Link>

        <ul className="hidden  lg:flex items-center gap-12 mx-auto">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className={`${
                  path === item.href ? "active" : ""
                } transition-colors text-xl  ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            type="button"
            aria-label="Contact Us"
            className="rounded-full font-bold text-white text-xl"
            size={"lg"}
          >
            Contact Us
          </Button>
        </div>

        <div
          className="hamburger-icon"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <div
            className={`icon-1 ${isNavOpen ? "a" : ""} ${
              isScrolled ? "bg-black" : "bg-white"
            }`}
          />
          <div
            className={`icon-2 ${isNavOpen ? "c" : ""} ${
              isScrolled ? "bg-black" : "bg-white"
            }`}
          />
          <div
            className={`icon-3 ${isNavOpen ? "b" : ""} ${
              isScrolled ? "bg-black" : "bg-white"
            }`}
          />
          <div className="clear" />
        </div>

        <ul
          className={`lg:hidden flex flex-col  items-center transition-all duration-[0.5s] py-[140px] px-5 bg-lightblue z-40 gap-5  h-full w-full fixed top-0 ${
            isNavOpen ? "right-0" : "-right-full"
          }`}
        >
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className={`${
                  path === item.href ? "active" : ""
                } transition-colors text-xl  ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
