import {Link} from "react-router-dom";
import Button from "../UI/Button/Button";
import {products} from "../../mock/products";
import {ProductCard} from "./ProductCard";
import {ProductSection} from "./ProductSection";

export const FeaturedProducts: React.FC = () => {
  const featured = products.slice(0, 4);
  return (
    <ProductSection title="Productos Destacados" className="items-center">
      <div className="grid gap-4 w-full max-w-5xl grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] items-center justify-items-center">
        {featured.map((p, i) => (
          <ProductCard key={p.id} {...p} highlight={i === 0} />
        ))}
      </div>
      <Link to="/productos">
        <Button className="bg-white text-stone-700 border border-stone-300 hover:bg-stone-200/60">
          Ver más
        </Button>
      </Link>
    </ProductSection>
  );
};
