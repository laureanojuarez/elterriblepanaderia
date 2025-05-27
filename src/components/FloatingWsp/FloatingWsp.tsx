import { Link } from "react-router";
import WspPng from "./WhatsApp.png";

export const FloatingWsp = () => {
  const phone = "5493417190840";
  const message = "Hola, me gustaria hacer un encargo!";
  const encodedMessage = encodeURIComponent(message);
  const wspUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        to={wspUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conectar por WhatsApp"
      >
        <img src={WspPng} alt="WhatsApp" className="w-18" />
      </Link>
    </div>
  );
};
