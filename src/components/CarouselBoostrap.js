import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselBoostrap = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Breed</h5>
          <p>Temukan ras kucing favoritmu</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Artikel</h5>
          <p>Berbagai macam artikel yang bermanfaat dalam memelihara si meong.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src="https://media.istockphoto.com/photos/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised-picture-id1361394182?k=20&m=1361394182&s=612x612&w=0&h=veRQ9_S8xcC54nBcJ8rNS4BqHVx4oBcfagohNNnF4Sw="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Adopt</h5>
          <p>
            Adopsi kucing yang kamu inginkan.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBoostrap