import { Routes, Route } from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Nav from "./components/nav/Nav"
import Home from "./routes/home/Home";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import ProductAbout from "./routes/product_about/ProductAbout"
import MainCategory from "./routes/maincategory/MainCategory";
import SubCategory from "./routes/subcategory/Subcategory";
import Login from "./routes/login/Login";
import Cart from "./components/cart/Cart";
import Admin from "./routes/admin/Admin";
import Private from "./routes/private/Private";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Cart/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Private/>}> 
          <Route path="/admin" element={<Admin/>}/>
        </Route>
        <Route  path="/productabout/:id" element={<ProductAbout/>}/>
        <Route  path="/maincategory/:categoryname" element={<MainCategory/>}/>
        <Route  path="/subcategory/:categoryname" element={<SubCategory/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;