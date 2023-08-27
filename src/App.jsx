import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import DetailProduct from "./components/DetailProduct";

function App() {
  useEffect(() => {
    document.title = "Rasshop";
    return () => {
      document.title = "Default";
    };
  }, []);
  return (
    <Router>
      <Navbar />

      <div className="px container mx-auto pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detailProduct" element={<DetailProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
