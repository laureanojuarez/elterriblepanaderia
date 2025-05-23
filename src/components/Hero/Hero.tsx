import heroPanaderia from "../../assets/heropanaderia.jpg";

export const Hero = () => {
  return (
    <section>
      <img
        src={heroPanaderia}
        alt="Portada Panaderia"
        className="w-full h-96 object-cover"
      />
    </section>
  );
};
