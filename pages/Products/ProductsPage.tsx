import { ProductSection } from "../../src/components/Products/ProductSection";

export function ProductsPage() {
  return (
    <section className="shadow-md bg-stone-100">
      <div className="flex flex-col items-center justify-center w-full mt-35 p-2 shadow-md bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Nuestros Productos</h1>
      </div>
      <ProductSection isProductPage={true} />
    </section>
  );
}
