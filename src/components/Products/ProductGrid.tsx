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

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = "grid-cols-2",
}) => {
  return (
    <div className={`grid ${columns} gap-3 md:grid-cols-3 lg:grid-cols-4`}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
