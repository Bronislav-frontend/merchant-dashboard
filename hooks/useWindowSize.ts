import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 390,
    height: 500,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;

// import { useEffect, useState } from "react";

// const useCheckMobileScreen = () => {
//   const [width, setWidth] = useState(390);

//   const handleWindowSizeChange = () => {
//     setWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowSizeChange);
//     return () => {
//       window.removeEventListener("resize", handleWindowSizeChange);
//     };
//   }, []);
//   return width <= 768;
// };

// export default useCheckMobileScreen;
