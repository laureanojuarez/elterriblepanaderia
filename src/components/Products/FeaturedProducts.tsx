import { Link } from "react-router";
import Button from "../UI/Button/Button";
import { products } from "../../mock/products";
import { ProductCard } from "./ProductCard";

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="flex flex-col w-full p-4 gap-4 bg-stone-100 items-center flex-wrap">
      <h2 className="text-2xl font-semibold text-center">
        Productos Destacados
      </h2>
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-5xl">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <Link to="/productos">
        <Button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100">
          Ver más
        </Button>
      </Link>
    </section>
  );
};
