import { products } from "../../mock/products";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  desc?: string;
  img?: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: string;
}

export const ProductFlex: React.FC<ProductGridProps> = () => {
  return (
    <div className={`flex flex-wrap justify-center gap-4`}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
