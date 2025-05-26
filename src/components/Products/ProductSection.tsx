import { Link, useLocation } from "react-router";
import { ProductCard } from "./ProductCard";
import { products } from "../../mock/products";
import Button from "../UI/Button/Button";

interface Product {
  id: number;
  name: string;
  desc: string;
  img?: string;
}

interface ProductSectionProps {
  isProductPage: boolean;
}

export const ProductSection = ({ isProductPage }: ProductSectionProps) => {
  const location = useLocation();
  const showButton = location.pathname === "/";
  return (
    <section className="flex flex-col w-full p-2 justify-center text-center gap-1 bg-stone-100">
      <div className="flex justify-center items-center gap-2 flex-wrap">
        {(isProductPage ? products : products.slice(0, 3)).map(
          (product: Product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              img={product.img}
            />
          )
        )}
      </div>

      {!isProductPage && showButton && (
        <Link to={"/productos"}>
          <Button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 hover:shadow-md transition-colors duration-200">
            Ver más
          </Button>
        </Link>
      )}
    </section>
  );
};
