import React from "react";
import Card from 'react-bootstrap/Card';
import Image from "next/image";
const CardKategoriSpesial = (props) => {
  return (
    <div >
      <Card style={{ width: "160px", height: "120px" }} className="d-flex justify-content-center align-items-center" id="card-kategori">
        <Image src={props.img} width={68} height={60} alt="" id="card-kategori-image"/>
        <Card.Body>
          <Card.Title id="card-title-kategori">{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardKategoriSpesial;
