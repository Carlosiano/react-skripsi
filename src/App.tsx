import { useState, useEffect } from "react";
import { Header, Main, Footer } from "./components";
import { chevronUp } from "./assets/images";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollY} />
      <Main />
      <Footer />

      <a href="#top" className={`back-top-btn ${scrollY > 100 && "active"}`}>
        <img src={chevronUp} alt="" className="ion-icon" aria-hidden="true" />
      </a>
    </>
  );
}

export default App;
