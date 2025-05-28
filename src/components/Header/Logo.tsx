import { Link } from "react-router";
import logoPanaderia from "../../assets/logo.png";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`absolute top-1
        flex justify-center items-center 
        transition-all duration-700 z-50`}
    >
      <img
        src={logoPanaderia}
        alt="Logo de la panadería"
        className={` transition-all duration-700 ${
          isScrolled ? "w-24" : "w-18"
        } `}
      />
    </Link>
  );
};
