import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ControlledCarousel></ControlledCarousel>
    </div>
  );
};
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            src="https://wallpapercave.com/wp/wp6921036.jpg"
            alt="First slide"
            width="1000px"
            height="600px"
          />
        </div>
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block"
            src="https://i0.wp.com/www.toppapeldeparede.com.br/wp-content/uploads/2021/04/50-Minimalist-Desktop-Wallpapers-and.png?fit=1200%2C675&ssl=1"
            alt="Second slide"
            width="1000px"
            height="600px"
          />
        </div>

        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center">
        <img
          className="d-block"
          src="https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/original/01.jpg"
          alt="Third slide"
          width="1000px"
          height="600px"
        />
        </div>

        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
