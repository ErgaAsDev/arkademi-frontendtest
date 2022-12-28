import React from "react";
import CarouselBig from "./Items/CarouselBig.page";
import CarouselImagesOne from "./Items/CarouselImagesOne.page";
import NavbarBottom from "./Items/NavbarBottom.page";
import NavbarTop from "./Items/NavbarTop.page";
import CardData from "./Items/datas/CardData";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import CardCarouselTrending from "./Items/CardCarouselTrending.page";
import CardCarouselFlashSale from "./Items/CardCarouselFlashSale.page";
import KategoriData from "./Items/datas/KategoriData";
import CardKategoriSpesial from "./Items/CardKategoriSpesial.page";
import Button from "react-bootstrap/Button";
import CardPromoSpesial from "./Items/CardPromoSpesial.page";
import LembagaDataOne from "./Items/datas/LembagaDataOne";
import LembagaDataTwo from "./Items/datas/LembagaDataTwo";
import CardLembagaSatu from "./Items/CardLembagaSatu.page";
import CardLembagaDua from "./Items/CardLembagaDua.page";
import Link from "next/link";
import Testimoni from "./Items/Testimoni.page";
import TentangArkademi from "./Items/TentangArkademi.page";
import Footer from "./Items/Footer.page";

const HomePage = () => {
  const cardDataTrending = CardData.map((card) => {
    return <CardCarouselTrending key={card.id} {...card} />;
  });

  const cardDataFlashSale = CardData.map((card) => {
    return <CardCarouselFlashSale key={card.id} {...card} />;
  });

  const cardDataKategori = KategoriData.map((card) => {
    return <CardKategoriSpesial key={card.id} {...card} />;
  });

  const cardDataLembagaSatu = LembagaDataOne.map((card) => {
    return <CardLembagaSatu key={card.id} {...card} />;
  });

  const cardDataLembagaDua = LembagaDataTwo.map((card) => {
    return <CardLembagaDua key={card.id} {...card} />;
  });

  return (
    <div id="homepage">
      <NavbarTop />
      <NavbarBottom />
      <CarouselBig />
      <CarouselImagesOne />
      <div className="mt-5" id="cardData-trending">
        <div className="container d-flex gap-3">
          <Image src="/Images/Trending.svg" width={30} height={35} alt="0" />
          <h2 id="text-trending">Trending</h2>
        </div>
        <Container className>
          <Carousel slide={true}>
            <Carousel.Item
              className="d-flex justify-content-between"
              id="carousel-card-trending"
            >
              {cardDataTrending}
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="mt-5" id="cardData-flashsale">
        <div className="container d-flex align-items-center gap-3">
          <Image src="/Images/FlashSale.svg" width={32} height={32} alt="0" />
          <h2 id="text-flashsale">Flash Sale</h2>
          <h5 id="text-flashsale-timer">Berakhir Dalam</h5>
          <Image
            src="/Images/TimerFlashSale.svg"
            width={131}
            height={27}
            alt="0"
          />
        </div>
        <Container className>
          <Carousel slide={true}>
            <Carousel.Item
              className="d-flex justify-content-between"
              id="carousel-card-trending"
            >
              {cardDataFlashSale}
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="mt-5" id="cardData-kategori">
        <h2 className="container" id="text-kategori">
          Kategori Terpopuler
        </h2>
        <div className="container d-flex justify-content-between" id="card-kategori-kontainer">
          {cardDataKategori}
        </div>
        <div className="container mt-5 text-center" id="div-button-kategori">
          <Button variant="light" id="button-kategori">
            Lihat Semua Kategori
          </Button>
        </div>
      </div>
      <CardPromoSpesial />
      <div className="mt-5" id="cardData-lembaga">
        <div className="container d-flex justify-content-between">
          <h2 id="text-lembaga">Lembaga</h2>
          <Link href="/">Lihat Semua</Link>
        </div>
        <div className="container d-flex flex-wrap gap-3 justify-content-between" id="card-lembaga-kontainer">
          {cardDataLembagaSatu}
          {cardDataLembagaDua}
        </div>
        {/* <div className="container mt-3 d-flex flex-wrap justify-content-between">
          {cardDataLembagaDua}
        </div> */}
      </div>
      <div className="mt-5" id="cardData-terbaru">
        <div className="container d-flex justify-content-between">
          <h2 id="text-trending">Terbaru</h2>
          <Link href="/">Lihat Semua</Link>
        </div>
        <Container className>
          <Carousel slide={true}>
            <Carousel.Item
              className="d-flex justify-content-between"
              id="carousel-card-trending"
            >
              {cardDataTrending}
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="mt-5" id="cardData-bisnis">
        <div className="container d-flex justify-content-between">
          <h2 id="text-trending">Bisnis</h2>
          <Link href="/">Lihat Semua</Link>
        </div>
        <Container className>
          <Carousel slide={true}>
            <Carousel.Item
              className="d-flex justify-content-between"
              id="carousel-card-trending"
            >
              {cardDataTrending}
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="mt-5" id="cardData-karier">
        <div className="container d-flex justify-content-between">
          <h2 id="text-trending">Pengembangan Karier</h2>
          <Link href="/">Lihat Semua</Link>
        </div>
        <Container className>
          <Carousel slide={true}>
            <Carousel.Item
              className="d-flex justify-content-between"
              id="carousel-card-trending"
            >
              {cardDataTrending}
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div id="div-card-testimoni">
        <Testimoni />
      </div>
      <TentangArkademi />
      <hr></hr>
      <Footer />
      <div id="copyright">
        <div className="container d-flex justify-content-between align-items-center" id="copyright-kontainer">
          <h6 id="copyright-text">© 2022 PT Arkademi Daya Indonesia</h6>
          <div className="d-flex gap-3">
            <h6><Link href="/" >Ketentuan Layanan</Link></h6>
            <h6><Link href="/" >Kontak</Link></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
