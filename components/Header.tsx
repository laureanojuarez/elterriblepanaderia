import { RiInstagramLine } from "@remixicon/react";
import logoPanaderia from "../assets/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-evenly items-center top-0 w-full bg-stone-100 transition-all duration-300 z-50 fixed ${
        isScrolled ? "h-16 shadow-md" : "h-20"
      }`}
    >
      <nav className="  text-black ">
        <ul className="flex gap-4 text-lg text-gray-800">
          <li>Empresa</li>
          <li>Productos</li>
        </ul>
      </nav>
      <div
        className={`absolute top-1 ${
          isScrolled ? "top-0" : "top-4"
        } transition-all duration-300`}
      >
        <img
          src={logoPanaderia}
          alt="Logo de la panadería"
          className="w-28 h-auto "
        />
      </div>

      <nav>
        <ul className="flex justify-center items-center gap-4 text-lg text-gray-800">
          <li>Home</li>
          <li>Contacto</li>
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
      </nav>
    </header>
  );
};
