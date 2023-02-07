import React, { useRef, useEffect, useState } from "react";

function Index({ screen, setCurrentImg, i }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    let observeRefValue = null;

    const observer = new IntersectionObserver(setItemVisible, options);

    if (ref.current) {
      observer.observe(ref.current);
      observeRefValue = ref.current;
    }

    return () => {
      if (observeRefValue) {
        observer.unobserve(observeRefValue);
      }
    };
  }, []);

  return (
    <div className={`screen-text ${isVisible ? "text-visible" : ""}`} ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right"
              key={screen.mobile_img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default Index