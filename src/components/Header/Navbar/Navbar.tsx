import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        className={`md:hidden text-gray-800 fixed right-4 z-50 transition-all duration-300 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        {open ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
      </button>

      <DesktopMenu />
      <MobileMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        isScrolled={isScrolled}
      />
    </nav>
  );
};
