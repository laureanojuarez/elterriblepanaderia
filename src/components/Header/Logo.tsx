import { Link } from "react-router";
import logoPanaderia from "../../assets/logo.png";

interface LogoProps {
  isScrolled: boolean;
}

export const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`
        flex justify-center items-center 
        md:absolute md:left-0 md:right-0 md:mx-auto
        transition-all duration-300
        ${isScrolled ? "md:top-[-15px] md:scale-80" : "md:top-4 md:scale-100"}
      
        `}
    >
      <img
        src={logoPanaderia}
        alt="Logo de la panadería"
        className={`${
          isScrolled ? "w-12" : "w-20"
        } transition-all duration-300 md:w-32`}
      />
    </Link>
  );
};
