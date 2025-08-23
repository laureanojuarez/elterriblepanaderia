import {ProductFlex} from "./ProductFlex";
import {ProductSection} from "./ProductSection";

export const AllProducts: React.FC = () => {
  return (
    <ProductSection id="todos" title="Todos los Productos" className="mt-12">
      <ProductFlex />
    </ProductSection>
  );
};
