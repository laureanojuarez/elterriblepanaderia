import {products} from "../../mock/products";
import {ProductCard} from "./ProductCard";

export const ProductFlex: React.FC = () => {
  return (
    <div
      className="grid gap-4 w-full
      grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] justify-items-center"
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
