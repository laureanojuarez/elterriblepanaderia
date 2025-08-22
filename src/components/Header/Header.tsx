import {Logo} from "./Logo";
import {useEffect, useState} from "react";
import {Navbar} from "./Navbar/Navbar";
import {DesktopMenuLeft, DesktopMenuRight} from "./Navbar/DesktopMenu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Altura móvil: si scrollea o menú abierto -> h-24, si no -> h-32
  // Desktop mantiene h-32 / h-24 según scroll
  const mobileHeightClass = isScrolled || menuOpen ? "h-24" : "h-32";
  const desktopHeightClass = isScrolled ? "md:h-24" : "md:h-32";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-stone-300 bg-stone-100/95 backdrop-blur-sm transition-all duration-500 ${mobileHeightClass} ${desktopHeightClass} ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl h-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 items-start">
        <div className="hidden md:flex">
          <DesktopMenuLeft isScrolled={isScrolled} />
        </div>

        <div className="justify-self-center w-full flex justify-center">
          <Logo isScrolled={isScrolled} menuOpen={menuOpen} />
        </div>

        <div className="hidden md:flex justify-end">
          <DesktopMenuRight isScrolled={isScrolled} />
        </div>

        <Navbar
          isScrolled={isScrolled}
          menuOpen={menuOpen}
          onToggle={() => setMenuOpen((o) => !o)}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
};
