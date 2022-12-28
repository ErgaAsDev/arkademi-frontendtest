import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
const CarouselBig = () => {
  return (
    <div>
      <Container>
        <Carousel slide={true}>
          <Carousel.Item>
            <Image
              src="/Images/BigCarousel.png"
              width={1346}
              height={280}
              alt=""
              id="bigcarousel-image"
            />
            <Image
              src="/Images/SmallCarousel.svg"
              width={459}
              height={257}
              alt=""
              id="smallcarousel-image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/Images/BigCarousel.png"
              width={1346}
              height={280}
              alt=""
              id="bigcarousel-image"
            />
            <Image
              src="/Images/SmallCarousel.svg"
              width={459}
              height={257}
              alt=""
              id="smallcarousel-image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/Images/BigCarousel.png"
              width={1346}
              height={280}
              alt=""
              id="bigcarousel-image"
            />
            <Image
              src="/Images/SmallCarousel.svg"
              width={459}
              height={257}
              alt=""
              id="smallcarousel-image"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default CarouselBig;
