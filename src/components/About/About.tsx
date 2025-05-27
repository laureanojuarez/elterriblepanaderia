export const About = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-stone-100 border border-gray-300 shadow-md p-6 md:p-8 gap-6 max-w-3xl mx-auto rounded-xl md:my-2">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
        Sobre Nosotros
      </h2>

      <div>
        <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
          Somos un emprendimiento familiar, descendiente de familia panadera.
          ¡Soñando y siempre brindando con amor los mejores sabores en
          panificados y galletería! Nos enorgullece poder transmitir y brindar
          lo mejor de nosotros en cada desayuno o merienda de sus hogares.
        </p>

        <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
          Los esperamos a todos para que degusten y nos conozcan, y así poder
          seguir creciendo y soñando juntos. ¡Los esperamos!
        </p>
      </div>
    </section>
  );
};
