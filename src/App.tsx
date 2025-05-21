import { Outlet } from "react-router";
import { Header } from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { Footer } from "./components/Footer/Footer";
import "./index.css";

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

export default App;
