import { Link } from "react-router";
import logo_elterrible from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-stone-100  flex  gap-2 items-center justify-evenly shadow-md border-t-2 border-t-stone-300">
      <img src={logo_elterrible} alt="" width={"100px"} />
      <Link to={"./productos"}>Productos</Link>
    </footer>
  );
};
