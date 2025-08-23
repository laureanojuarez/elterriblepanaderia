import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/Home/Home";
import {ProductsPage} from "../../pages/Products/ProductsPage";
import {ContactPage} from "../../pages/Contact/ContactPage";
import NotFoundPage from "../../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/contacto" element={<ContactPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
