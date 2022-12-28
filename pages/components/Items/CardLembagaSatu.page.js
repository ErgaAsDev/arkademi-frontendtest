import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Link from "next/link";
const CardLembagaSatu = (props) => {
  return (
    <div id="card-lembaga">
      <Link href="/">
        <Card
          style={{ width: "160px", height: "120px" }}
          className="d-flex justify-content-center align-items-center"
          id="card"
        >
          <Image
            src={props.img}
            width={68}
            height={60}
            alt=""
            className="mt-3"
          />
          <Card.Body>
            <Card.Title id="card-title-lembaga">{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default CardLembagaSatu;
