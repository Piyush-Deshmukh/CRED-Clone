import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import ProductShowcase from "../components/HomePage/ProductShowcase";
import FeelSpecial from "../components/HomePage/FeelSpecial";
import CredExperience from "../components/HomePage/CredExperience";
import CredSecurity from "../components/HomePage/CredSecurity";
import BrandsLove from "../components/HomePage/BrandsLove";
import WindowPeek from "../components/HomePage/WindowPeek";
import MobileScroll from "../components/HomePage/MobileScroll";
import CredStory from "../components/HomePage/CredStory";
import AppRating from "../components/HomePage/AppRating";
import Footer from "../components/HomePage/common/Footer";

function home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeek />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer /> 
    </>
  )
}

export default home