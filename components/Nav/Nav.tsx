'use client'
// Nav.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./Nav.module.css";
import MobileMenu from "./MobileMenu"; // Extracted MobileMenu component
import Image from "next/image";
import logo_nav from "@/assets/images/logo/logo_nav.png"

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const logo = logo_nav; // Updated image path

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-5 px-4 md:px-0 bg-blue-bg" data-aos="slide-down">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-10 h-10">
            <Image src={logo} alt="logo" height={40} width={40} className="w-full h-full" />
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
