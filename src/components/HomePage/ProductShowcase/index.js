import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

function Index() {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if(e[0]?.isIntersecting){
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    let observerRefValue = null;

    const observer = new IntersectionObserver(toggleAnimation, options);

    if(!showAnimation){
      if(ref.current){
        observer.observe(ref.current);
        observerRefValue = ref.current;
      }
    }

    return () => {
      if(observerRefValue){
        observer.unobserve(observerRefValue);
      }
    }
  });

  return (
    <div className="product">
      <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`} ref={ref}>
          { showAnimation && (<div className="showcase-wrapper">
          <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
              className="showcase-ui showcase-mockup-1" alt=""
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
              className="showcase-ui showcase-mockup-2" alt=""
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
              className="showcase-ui showcase-mockup-3" alt=""
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
              className="showcase-ui showcase-mockup-4" alt=""
            />
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
              className="showcase-ui showcase-mockup-5" alt=""
            />
          </div>
          )}
      </div>
    </div>
  )
}

export default Index