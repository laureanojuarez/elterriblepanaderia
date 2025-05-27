import WspPng from "./WhatsApp.png";

export const FloatingWsp = () => {
  const phone = "5493417190840";
  const message = "Hola, me gustaría hacer un encargo!";
  const encodedMessage = encodeURIComponent(message);
  const wspUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={wspUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="block transition-transform duration-300 hover:scale-110 hover:shadow-lg"
      >
        <img
          src={WspPng}
          alt="WhatsApp"
          className="w-16 h-16 rounded-full shadow-md hover:shadow-2xl transition-shadow duration-300"
        />
      </a>
    </div>
  );
};
