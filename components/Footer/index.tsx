import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-darkblue/70">
      <div className="container-custom py-10  grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-4xl font-semibold text-white">Hadajcom</h2>
          </div>
          <p className="text-lg text-white leading-relaxed">
            With over 8 years experience in the industry, adipiscing elit.
            Tortor vel posuere
          </p>
          <div className="text-lg text-white space-y-1">
            <p>
              21B, Redeemed street, dutse baupma, bwari area council, Abuja,
              Nigeria
            </p>
            <p>test@mailservice.com</p>
            <p>+23481001122099</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ml-5">
          <h3 className="text-2xl font-medium text-white">Explore</h3>
          <ul className="space-y-2 text-lg ml-2">
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-gray-300 text-white text-lg "
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white">Socials</h3>
          <div className="flex gap-4 text-xl">
            <Link href="#">
              <FaFacebookSquare
                className="hover:text-gray-300"
                size={30}
                color="white"
              />
            </Link>
            <Link href="#">
              <FaSquareXTwitter
                className="hover:text-gray-300"
                size={30}
                color="white"
              />
            </Link>
            <Link href="#">
              <FaSquareInstagram
                className="hover:text-gray-300"
                size={30}
                color="white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
