import { Link } from "react-router";
import { RiInstagramLine } from "@remixicon/react";

export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex justify-between items-center w-full px-8">
      <ul className="flex gap-6 text-lg text-gray-800">
        <li className="hover:text-gray-600 cursor-pointer transition-colors">
          Empresa
        </li>
        <li>
          <Link
            to="/productos"
            className="hover:text-gray-600 transition-colors"
          >
            Productos
          </Link>
        </li>
      </ul>

      <ul className="flex gap-6 text-gray-800 text-lg">
        <li>
          <Link
            to="/contacto"
            className="hover:text-gray-600 transition-colors"
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
            className="flex items-center gap-2 hover:text-gray-600 transition-colors"
          >
            Instagram
            <RiInstagramLine size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};
