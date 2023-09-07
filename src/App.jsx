import { Routes, Route } from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Nav from "./components/nav/Nav"
import Home from "./routes/home/Home";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import ProductAbout from "./routes/product_about/ProductAbout"

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;