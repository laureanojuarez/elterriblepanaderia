import {Link} from "react-router-dom";
import logoPanaderia from "../../assets/logo.png";

interface LogoProps {
  isScrolled: boolean;
  menuOpen?: boolean;
}

export const Logo = ({isScrolled, menuOpen}: LogoProps) => {
  // Forzamos aspecto “comprimido” también cuando el menú mobile está abierto
  const compressed = isScrolled || menuOpen;
  return (
    <Link to="/" aria-label="Ir al inicio" className="flex items-center">
      <div
        className={`w-40 h-40 flex justify-center transition-all duration-500 ${
          compressed ? "pt-1" : "pt-3"
        }`}
      >
        <img
          src={logoPanaderia}
          alt="Logo de la panadería"
          className={`select-none pointer-events-none transition-transform duration-500 ease-out origin-top ${
            compressed ? "scale-60" : "scale-120"
          }`}
          draggable={false}
        />
      </div>
    </Link>
  );
};
