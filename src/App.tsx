import {Header} from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import "./index.css";
import {FloatingWsp} from "./components/FloatingWsp/FloatingWsp";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      <Header />
      <AppRoutes />
      <FloatingWsp />
      <Footer />
    </Layout>
  );
}

export default App;
