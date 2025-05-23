import { Link } from "react-router";
import logoPanaderia from "../../assets/logo.png";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`absolute top-2
        flex justify-center items-center 
        transition-all duration-700 z-50`}
    >
      <img
        src={logoPanaderia}
        alt="Logo de la panadería"
        className={`${
          isScrolled ? "w-20" : "w-32"
        } transition-all duration-700`}
      />
    </Link>
  );
};
