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
    <nav className="md:w-full">
      {/* Botón hamburguesa - solo móvil */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        className={`md:hidden text-gray-800 fixed right-4 z-50 transition-all duration-300 ${
          isScrolled ? "top-3" : "top-6"
        }`}
      >
        {open ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
      </button>

      {/* Menú desktop */}
      <DesktopMenu />

      {/* Menú móvil */}
      <MobileMenu
        isOpen={open}
        onClose={() => setOpen(false)}
        isScrolled={isScrolled}
      />
    </nav>
  );
};
