import {Link} from "react-router-dom";
import {RiInstagramLine} from "@remixicon/react";

interface DesktopMenuSectionProps {
  isScrolled: boolean;
}

export const DesktopMenuLeft = ({isScrolled}: DesktopMenuSectionProps) => (
  <ul
    className={`hidden md:flex gap-6 text-lg text-gray-800 items-start transition-[padding] duration-500 ${
      isScrolled ? "pt-3" : "pt-8"
    }`}
  >
    <li className="hover:text-gray-600 cursor-pointer transition-colors">
      Empresa
    </li>
    <li>
      <Link to="/productos" className="hover:text-gray-600 transition-colors">
        Productos
      </Link>
    </li>
  </ul>
);

export const DesktopMenuRight = ({isScrolled}: DesktopMenuSectionProps) => (
  <ul
    className={`hidden md:flex gap-6 text-lg text-gray-800 items-start transition-[padding] duration-500 ${
      isScrolled ? "pt-3" : "pt-8"
    }`}
  >
    <li>
      <Link to="/contacto" className="hover:text-gray-600 transition-colors">
        Contacto
      </Link>
    </li>
    <li>
      <a
        href="https://www.instagram.com/elterriblepanaderia/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visítanos en Instagram"
        className="flex items-center gap-2 hover:text-gray-600 transition-colors"
      >
        Instagram
        <RiInstagramLine size={20} />
      </a>
    </li>
  </ul>
);
