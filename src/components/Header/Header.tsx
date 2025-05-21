import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

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
      className={`flex justify-evenly items-center top-0 w-full bg-stone-100 transition-all duration-300 fixed ${
        isScrolled ? "h-13 shadow-md" : "h-20"
      }`}
    >
      <Logo isScrolled={isScrolled} />
      <Navbar />
    </header>
  );
};
