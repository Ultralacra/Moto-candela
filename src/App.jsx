import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorPalette } from './providers/pallete';
import Layout from "./components/Layout/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MotorcycleDetail from "./pages/MotorcycleDetail";
import Motorcycles from "./pages/Motorcycles";
import NotFound from "./pages/NotFound";
import ReplacementDetail from "./pages/ReplacementDetail";
import Replacements from "./pages/Replacements";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import "./styles/global.scss";
import "./styles/normalize.scss";
import 'animate.css';
import ScrollToTop from './helpers/scrollToTop';
import CartProvider from './providers/CartProvider';

export default () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ColorPalette}>
        <CartProvider>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/motos" element={<Motorcycles />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/repuestos" element={<Replacements />} />
              <Route path="/motos/:id" element={<MotorcycleDetail />} />
              <Route path="/repuestos/:id" element={<ReplacementDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
