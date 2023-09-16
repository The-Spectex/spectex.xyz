"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./Nav.module.css"; // Import your custom CSS file

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => (
  <div
    className={classNames(
      "md:hidden bg-gray-800 bg-opacity-70 text-white absolute top-16 right-0 left-0 z-20",
      {
        hidden: !isOpen,
      }
    )}
  >
    <ul className="flex flex-col items-center space-y-6 py-6">
      <li className="font-semibold text-lg">Home</li>
      <li className="font-semibold text-lg">Services</li>
      <li className="font-semibold text-lg">Projects</li>
      <li className="font-semibold text-lg">Contact</li>
      <li className="font-semibold text-lg">About</li>
      <li className="font-semibold text-lg">Login</li>
      <li className="font-semibold text-lg">Signup</li>
    </ul>
  </div>
);

const Nav = () => {
  const logo = "https://cdn.spectex.xyz/images/logo/logo_nav.png";

  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-5 px-4 md:px-0 bg-blue-bg" data-aos="slide-down">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <Image src={logo} layout="fill" objectFit="contain" alt="logo" />
          </div>
          <div className="font-black text-xl text-white">SPECTEX</div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            className={classNames(
              "text-gray-500 hover:text-gray-900 focus:text-gray-900",
              {
                [styles.transparent]: isMobileMenuOpen,
              }
            )}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className={classNames("h-8 w-8 text-white", styles.rotate)}
              />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-white">
            <li className="font-semibold cursor-pointer hover:text-bold">Home</li>
            <li className="font-semibold cursor-pointer hover:text-bold">Services</li>
            <li className="font-semibold cursor-pointer hover:text-bold">Projects</li>
            <li className="font-semibold cursor-pointer hover:text-bold">Contact</li>
            <li className="font-semibold cursor-pointer hover:text-bold">About</li>
          </ul>
          <ul className="flex space-x-6 text-white">
            <li className="font-semibold cursor-pointer hover:text-bold">Login</li>
            <li className="font-semibold cursor-pointer hover:text-bold">Signup</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Nav;
