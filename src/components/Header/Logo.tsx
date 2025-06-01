import { Link } from "react-router";
import logoPanaderia from "../../assets/logo.png";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`absolute 
        flex justify-center items-center 
        transition-all duration-1000 z-50 ${isScrolled ? "top-1" : "top-30"}`}
    >
      <img
        src={logoPanaderia}
        alt="Logo de la panadería"
        className={` transition-all duration-1000 ${
          isScrolled ? "w-24" : "w-50"
        } `}
      />
    </Link>
  );
};
