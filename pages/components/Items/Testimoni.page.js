import React from "react";
import Card from "react-bootstrap/Card";
import Image from "next/image";
const Testimoni = () => {
  return (
    <div className="container mt-5">
      <h1
        className="d-flex pt-5 pb-5 justify-content-center"
        id="text-testimoni"
      >
        Testimoni
      </h1>
      <div className="d-flex justify-content-between" id="card-testimoni-kontainer">
        <Card style={{ width: "385px", height: "280px" }} id="card-testimoni">
          <div className="container mt-3">
            <Image
              src="/Images/TestimoniShape.svg"
              width={32}
              height={23}
              alt=""
            />
            <Card.Body>
              <Card.Text id="testimoni">
                Kursus online di Arkademi sangat berkesan, materinya simple
                tidak berbelit-belit. Mudah dicerna bagi para pemula seperti
                saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam
                kuis. Sukses terus buat Arkademi!
              </Card.Text>
            </Card.Body>
            <div className="container d-flex mt-3 gap-3">
            <Image
              src="/Images/TestimoniPic1.svg"
              width={42}
              height={42}
              alt=""
            />
            <div>
              <h5 id="text-testimoni-nama">Nizar Putra (Bandung)</h5>
              <h5 id="text-testimoni-kelas">Siswa Kelas Bootstrap</h5>
            </div>
          </div>
          </div>
          
        </Card>
        <Card style={{ width: "385px", height: "280px" }} id="card-testimoni">
          <div className="container mt-3">
            <Image
              src="/Images/TestimoniShape.svg"
              width={32}
              height={23}
              alt=""
            />
            <Card.Body>
              <Card.Text id="testimoni">
                Kursus online di Arkademi sangat berkesan, materinya simple
                tidak berbelit-belit. Mudah dicerna bagi para pemula seperti
                saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam
                kuis. Sukses terus buat Arkademi!
              </Card.Text>
            </Card.Body>
            <div className="container d-flex mt-3 gap-3">
              <Image
                src="/Images/TestimoniPic2.svg"
                width={42}
                height={42}
                alt=""
              />
              <div>
                <h5 id="text-testimoni-nama">Nizar Putra (Bandung)</h5>
                <h5 id="text-testimoni-kelas">Siswa Kelas Bootstrap</h5>
              </div>
            </div>
          </div>
        </Card>
        <Card style={{ width: "385px", height: "280px" }} id="card-testimoni">
          <div className="container mt-3">
            <Image
              src="/Images/TestimoniShape.svg"
              width={32}
              height={23}
              alt=""
            />
            <Card.Body>
              <Card.Text id="testimoni">
                Kursus online di Arkademi sangat berkesan, materinya simple
                tidak berbelit-belit. Mudah dicerna bagi para pemula seperti
                saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam
                kuis. Sukses terus buat Arkademi!
              </Card.Text>
            </Card.Body>
            <div className="container d-flex mt-3 gap-3">
              <Image
                src="/Images/TestimoniPic3.svg"
                width={42}
                height={42}
                alt=""
              />
              <div>
                <h5 id="text-testimoni-nama">Nizar Putra (Bandung)</h5>
                <h5 id="text-testimoni-kelas">Siswa Kelas Bootstrap</h5>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Testimoni;
