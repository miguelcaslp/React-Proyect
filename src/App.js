import { Route, Routes } from "react-router-dom"
import Home from './components/home'; 
import Navbar from "./NavBar";
import Cart from "./components/cart";
import Products from "./components/products";
import Footer from "./Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer></Footer>
      </>
  )
}

export default App;
