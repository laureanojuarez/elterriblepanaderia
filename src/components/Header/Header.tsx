import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` flex justify-center items-center w-full bg-stone-100 transition-all duration-700 fixed border-b-1 border-stone-500 ${
        isScrolled ? "h-16 shadow-md" : "h-20"
      } `}
    >
      <Logo isScrolled={isScrolled} />
      <Navbar isScrolled={isScrolled} />
    </header>
  );
};
