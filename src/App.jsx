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

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route  path="/productabout/:id" element={<ProductAbout/>}/>
        <Route  path="/maincategory/:categoryname" element={<MainCategory/>}/>
        <Route  path="/subcategory/:categoryname" element={<SubCategory/>}/>
        <Route  path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;