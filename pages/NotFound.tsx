import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-center mt-20">
        404 - Pagina no encontrada
      </h1>
      <p className="text-center mt-4">
        Lo sentimos, la página que estás buscando no existe
      </p>
      <Link to={"/"} className="mt-6 text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
