import React from 'react'
import Main from "../../components/main/Main";
import Nav from "../../components/nav/Nav";
import Search from '../../components/search/Search';
import Banner from "../../components/banner/Banner"
import Offer from '../../components/offer-section/Offer';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      {/* <Nav/> */}
      {/* <Search/> */}
      <Banner/>
      <Main/>
      <Offer/>
      <Footer/>
    </div>
  )
}

export default Home