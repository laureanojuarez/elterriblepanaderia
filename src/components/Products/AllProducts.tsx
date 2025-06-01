import { products } from "../../mock/products";
import { ProductFlex } from "./ProductFlex";

export const AllProducts: React.FC = () => {
  return (
    <section className="flex flex-col w-full p-4 gap-4 bg-stone-100">
      <h1 className="text-3xl font-bold text-center">Todos los Productos</h1>
      <ProductFlex products={products} />
    </section>
  );
};
