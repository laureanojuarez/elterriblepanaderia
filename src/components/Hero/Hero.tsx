import heroPanaderia from "../../assets/heropanaderia.jpg";

export const Hero = () => {
  return (
    <section>
      <img
        src={heroPanaderia}
        alt="Portada Panaderia"
        className="w-full h-150 object-cover"
      />
    </section>
  );
};
