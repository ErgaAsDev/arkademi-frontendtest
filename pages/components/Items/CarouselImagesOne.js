import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Button from "react-bootstrap/Button";
const CarouselImagesOne = () => {
  return (
    <div>
      <Container className="mt-3">
        <Carousel slide={true}>
          <Carousel.Item
            className="d-flex justify-content-between"
            id="carousel-images"
          >
            <Image
              src="/Images/CarouselOne.png"
              width={392}
              height={109}
              alt=""
              id="carousel-one"
            />
            <Image
              src="/Images/CarouselTwo.png"
              width={392}
              height={109}
              alt=""
              id="carousel-two"
            />
            <Image
              src="/Images/CarouselThree.png"
              width={392}
              height={109}
              alt=""
              id="carousel-three"
            />
          </Carousel.Item>
        </Carousel>
        <div className="mt-3" id="div-button-spesialisasi">
          <Button variant="light" id="button-spesialisasi">Lihat Semua Spesialisasi</Button>
        </div>
      </Container>
    </div>
  );
};

export default CarouselImagesOne;
