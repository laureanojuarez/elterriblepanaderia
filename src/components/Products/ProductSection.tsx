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
    <section className="flex flex-col w-full p-4 justify-center text-center gap-4 bg-stone-100 items-center">
      <div
        className={`${
          isProductPage
            ? "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:justify-center xl:items-center xl:gap-4 xl:flex-wrap items-stretch"
            : "flex flex-col gap-3 md:flex-row md:justify-center md:items-center md:gap-4"
        }`}
      >
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
