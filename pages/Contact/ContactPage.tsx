import { RiInstagramLine, RiWhatsappLine } from "@remixicon/react";

export function ContactPage() {
  const phone = "5493417190840";
  const message = "Hola, me gustaría hacer una consulta!";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center bg-stone-100 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          ¡Contactanos!
        </h1>

        <p className="text-gray-600 mb-8">
          Estamos aquí para ayudarte. Elige tu forma preferida de contacto:
        </p>

        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <RiWhatsappLine size={24} />
            <span className="font-medium">Escribinos por WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/elterriblepanaderia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <RiInstagramLine size={24} />
            <span className="font-medium">Seguinos en Instagram</span>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Respondemos rápidamente en ambas plataformas
        </p>
      </div>
    </div>
  );
}
