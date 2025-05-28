import { Link } from "react-router";
import { RiInstagramLine } from "@remixicon/react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}

export const MobileMenu = ({
  isOpen,
  onClose,
  isScrolled,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden bg-stone-100 shadow-lg border-t border-gray-200 fixed left-0 right-0 z-30 p-6 transition-all duration-700 ${
        isScrolled ? "top-16" : "top-20"
      }`}
    >
      <ul className="flex flex-col gap-4 text-lg text-gray-800 text-center">
        <li
          className="hover:text-gray-600 cursor-pointer py-2"
          onClick={onClose}
        >
          Empresa
        </li>
        <li>
          <Link
            to="/productos"
            onClick={onClose}
            className="block py-2 hover:text-gray-600 transition-colors"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            onClick={onClose}
            className="block py-2 hover:text-gray-600 transition-colors"
          >
            Contacto
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/elterriblepanaderia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visítanos en Instagram"
            className="flex items-center justify-center gap-2 py-2 hover:text-gray-600 transition-colors"
            onClick={onClose}
          >
            Instagram
            <RiInstagramLine size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};
