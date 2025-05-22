import { Hero } from "../../src/components/Hero/Hero";
import { About } from "../../src/components/About/About";
import { ProductSection } from "../../src/components/Products/ProductSection";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProductSection isProductPage={false} />
    </main>
  );
};
