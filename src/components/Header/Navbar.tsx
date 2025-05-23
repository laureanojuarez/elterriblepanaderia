import { useState } from "react";
import { RiInstagramLine, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { Link } from "react-router";

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar = ({ isScrolled }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:w-full">
      {/* Botón hamburguesa - solo visible en móvil */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        className={`md:hidden text-gray-800 absolute right-4 transition-all duration-700 ${
          isScrolled ? "top-3" : "top-6"
        }`}
      >
        {open ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
      </button>

      {/* Menú desktop - solo visible en pantallas medianas y grandes */}
      <div className="hidden md:flex justify-evenly items-center gap-8 md:w-full">
        <ul className="flex gap-6 text-lg text-gray-800  ">
          <li className="hover:text-gray-600 cursor-pointer">Empresa</li>
          <li>
            <Link to={"/productos"} className="hover:text-gray-600">
              Productos
            </Link>
          </li>
        </ul>
        <ul className="flex gap-2 text-gray-800 text-lg">
          <li>
            <Link to={"/"} className="hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contacto"} className="hover:text-gray-600">
              Contacto
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elterriblepanaderia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visítanos en Instagram"
              className="hover:text-gray-600"
            >
              <RiInstagramLine size={24} />
            </a>
          </li>
        </ul>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div
          className={`md:hidden bg-stone-100 shadow-lg fixed left-0 right-0 z-40 p-4 ${
            isScrolled ? "top-11" : "top-20"
          } duration-700`}
        >
          <ul className="flex flex-col gap-4 text-lg text-gray-800">
            <li
              className="hover:text-gray-600 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Empresa
            </li>
            <li>
              <Link
                to={"/productos"}
                onClick={() => setOpen(false)}
                className="hover:text-gray-600"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={() => setOpen(false)}
                className="hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/contacto"}
                onClick={() => setOpen(false)}
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
                className="hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                <RiInstagramLine size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
