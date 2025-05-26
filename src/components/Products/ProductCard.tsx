import { useLocation } from "react-router";

interface ProductCardProps {
  name: string;
  img?: string;
  desc?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  img,
  desc,
}) => {
  const location = useLocation();
  const isProductPage = location.pathname === "/productos";

  return (
    <div
      className={`bg-stone-200 flex flex-col gap-2 p-4 border-1 border-gray-600 rounded-lg shadow-md w-full ${
        isProductPage ? "max-w-sm" : "max-w-xs"
      }`}
    >
      <h1 className="text-2xl font-light">{name}</h1>
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};
