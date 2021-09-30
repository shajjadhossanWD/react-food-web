import { Carousel } from 'react-bootstrap';
import React from 'react';

import "./Slider.css";

const Slider = () => {
 
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block  carouselImg"
          src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-success">Delicious Food</h1>
          <h1 className="w-75 mx-auto  mb-3">It is even Better then an expensive cookery book</h1>
          <p className="w-50 mx-auto  mb-5 pb-5">Tasty Shop has some pretty cool and different recipes, that look delicious! Aside from that, you can purchase their products like cookware, bake ware and utensils in vibrant color choices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carouselImg"
          src="https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-success">Delicious Food</h1>
          <h1 className="w-75 mx-auto text-dark mb-3">It is even Better then an expensive cookery book</h1>
          <p className="w-50 mx-auto text-dark mb-5 pb-5"> Tasty Shop has some pretty cool and different recipes, that look delicious! Aside from that, you can purchase their products like cookware, bake ware and utensils in vibrant color choices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  carouselImg"
          src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1180&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-success">Delicious Food</h1>
          <h1 className="w-75 mx-auto mb-3">It is even Better then an expensive cookery book</h1>
          <p  className="w-50 mx-auto mb-5 pb-5">Praesent Tasty Shop has some pretty cool and different recipes, that look delicious! Aside from that, you can purchase their products like cookware, bake ware and utensils in vibrant color choices.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
  );
};

export default Slider;