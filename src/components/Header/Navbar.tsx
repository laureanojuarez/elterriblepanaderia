import { useState } from "react";
import { RiInstagramLine, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { Link } from "react-router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:w-full">
      {/* Desktop */}
      <div className="hidden md:flex justify-evenly w-full">
        <ul className="flex gap-4 text-lg text-gray-800">
          <li>Empresa</li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4 text-lg text-gray-800">
          <li>Home</li>
          <li>
            <Link to={"/contacto"}>Contacto</Link>
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

      {/* Mobile */}
      <div className="flex md:hidden justify-end items-center px-4">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="text-gray-800"
        >
          {open ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-20 z-50 p-4">
          <ul className="flex flex-col gap-4 text-lg text-gray-800">
            <li>Empresa</li>
            <li>
              <Link to={"/productos"} onClick={() => setOpen(false)}>
                Productos
              </Link>
            </li>
            <li>Home</li>
            <li>
              <Link to={"/contacto"} onClick={() => setOpen(false)}>
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
