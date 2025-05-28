import { Hero } from "../../src/components/Hero/Hero";
import { About } from "../../src/components/About/About";
import { Mapa } from "../../src/components/UI/Mapa/Mapa";
import { FeaturedProducts } from "../../src/components/Products/FeaturedProducts";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <About />
      <Mapa />
    </main>
  );
};
