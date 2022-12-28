import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";

const CardCarouselFlashSale = (props) => {
  return (
    <div className="mt-2 " id="card-flashsale">
      <Card style={{ width: "230px", height: "260px" }} id="card">
        <Image src={props.img} width={230} height={96} alt="" />
        <Card.Body>
          <h5 id="card-sign">{props.sign}</h5>
          <Card.Title id="card-title">{props.title}</Card.Title>
          <div className="d-flex mt-2 align-items-center">
            <Image src={props.rate} width={10} height={9} alt="" />
            <h5 id="card-ratenumber">{props.rateNumber}</h5>
          </div>
          <div className="mt-2">
            <Image src={props.discount} width={97} height={17} alt="" />
            <h5 id="card-price">{props.price}</h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardCarouselFlashSale;
