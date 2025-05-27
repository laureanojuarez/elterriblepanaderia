import WspPng from "./WhatsApp.png";

export const FloatingWsp = () => {
  const phone = "5493417190840";
  const message = "Hola, me gustaría hacer un encargo!";
  const encodedMessage = encodeURIComponent(message);
  const wspUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={wspUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="block group"
      >
        <img
          src={WspPng}
          alt="WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg group-hover:shadow-2xl group-hover:scale-105 group-active:scale-95 transition-all duration-300 ease-out object-cover"
        />
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>
    </div>
  );
};
