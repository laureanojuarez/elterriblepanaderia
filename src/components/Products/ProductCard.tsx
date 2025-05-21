import { useLocation } from "react-router";

interface ProductCardProps {
  name: string;
  img?: string;
  desc: string;
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
      className={`flex flex-col gap-2 p-4 border-2 border-gray-300 rounded-lg shadow-md ${
        isProductPage ? "max-w-sm" : "max-w-xs"
      }`}
    >
      <h1 className="text-xl font-bold">{name}</h1>
      <img
        src={img || "https://placehold.co/500x500"}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};
