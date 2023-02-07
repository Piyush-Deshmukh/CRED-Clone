import React, { useState } from "react";
import Button from "../common/Button";
import "./heroSection.css";

function Index() {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  return (
    <div className="hero-section-wrapper">
        <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}>
            <div className="mobile-navbar">
                <div className="mobile-nav-item">credit score check</div>
                <div className="mobile-nav-item">CRED pay</div>
            </div>
        </div>
        <div className="flex max-width header">
            <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
                className="header-logo" alt=""
            />
            <div className="only-mobile mobile-menu-button-wrapper">
                <button className={`hamburger hamburger--spin ${showMobMenu ? "is-active" : ""}`} type="button" onClick={toggleMobileMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className="flex non-mobile">
                <div className="header-nav-item">credit score check</div>
                <div className="header-nav-item">CRED pay</div>
            </div>
        </div>
          <div className="flex absolute-center flex-col hero-section max-width">
            <div className="hero-heading">
                rewards for paying credit card bills.
            </div>
            <div className="hero-subheading">
                join 9M+ members who win rewards and cashbacks everyday
            </div>
            <Button buttonText="Download CRED" />
        </div>
    </div>
  )
}

export default Index