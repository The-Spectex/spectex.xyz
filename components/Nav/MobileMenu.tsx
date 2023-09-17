// MobileMenu.tsx
import React from "react";
import classNames from "classnames";

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

export default MobileMenu;
