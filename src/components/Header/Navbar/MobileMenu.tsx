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
      className={`md:hidden bg-stone-100 shadow-2xl fixed left-0 right-0 z-40 p-4 transition-all duration-700  ${
        isScrolled ? "top-11" : "top-20"
      }`}
    >
      <ul className="flex flex-col gap-4 text-lg text-gray-800 items-end px-8">
        <li className="hover:text-gray-600 cursor-pointer" onClick={onClose}>
          Empresa
        </li>
        <li>
          <Link
            to="/productos"
            onClick={onClose}
            className="hover:text-gray-600"
          >
            Productos
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            onClick={onClose}
            className="hover:text-gray-600"
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
            className="hover:text-gray-600 flex items-center gap-2"
            onClick={onClose}
          >
            Instagram
            <RiInstagramLine size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};
