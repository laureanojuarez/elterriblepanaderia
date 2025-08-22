import {RiMenu3Line, RiCloseLine} from "@remixicon/react";
import {MobileMenu} from "./MobileMenu";

interface NavbarProps {
  isScrolled: boolean;
  menuOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const Navbar = ({
  isScrolled,
  menuOpen,
  onToggle,
  onClose,
}: NavbarProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-label="Abrir menú"
        className={`md:hidden text-gray-800 fixed right-4 z-50 transition-all duration-500 ${
          isScrolled || menuOpen ? "top-5" : "top-9"
        }`}
      >
        {menuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
      </button>
      <MobileMenu
        isOpen={menuOpen}
        onClose={onClose}
        headerCompressed={isScrolled || menuOpen}
      />
    </>
  );
};
