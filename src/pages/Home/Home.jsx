import React, { useRef } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Products from '../../components/Products/Products';
import About from '../../components/About/About';

const Home = React.forwardRef((props, ref) => {
  const productsRef = useRef(null);
  const aboutRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    scrollToSection(section) {
      switch (section) {
        case 'products':
          productsRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
      }
    },
  }));

  return (
    <div>
      <Header />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
});

export default Home;
