import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from './Services/Services';
import '../Home/Home.css';

const Home = () => {
    return (
        <div className="home">
        
            <Carousel fade>
    <Carousel.Item>
    <img height="300"
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/doctors-group-260nw-603518372.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h2 style={{color:'black'}}>Better Health, Better Life</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="300"
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/professional-medical-surgeon-doctors-team-260nw-1693270909.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2 style={{color:'black'}}>Better Health, Better Life</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="300"
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/healthcare-people-group-professional-doctor-260nw-1213711042.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 style={{color:'black'}}>Better Health, Better Life</h2>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1 className="text-center mt-5">our 24 hour services</h1>
<Services></Services>
        </div>
    );
};

export default Home;
