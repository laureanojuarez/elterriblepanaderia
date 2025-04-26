import logoPanaderia from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="bg-stone-100">
      <div className="bg-stone-100 h-8 text-black ">
        <ul className="flex justify-evenly items-center h-full">
          <li>
            <a
              href="https://www.instagram.com/elterriblepanaderia/"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li>Whatsapp</li>
        </ul>
      </div>

      {/* Seccion principal */}
      <section className="flex justify-evenly items-center bg-stone-800 text-white">
        <img src={logoPanaderia} alt="Logo de la panadería" className="w-24 " />
        <nav>
          <ul className="flex justify-center items-center gap-4 text-lg font-bold">
            <li>Home</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
