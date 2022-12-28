import Image from "next/image";
import React from "react";

const TentangArkademi = () => {
  return (
    <div className="container d-flex flex-row justify-content-between" id="tentang-arkademi">
      <Image src="/Images/TentangFoto.svg" width={385} height={281} alt="" />
      <div className id="tentang-arkademi-kontainer">
        <Image
          src="/Images/TentangArkademiLogo.svg"
          width={142}
          height={29}
          alt=""
          className="mb-2"
          id="tentang-arkademi-logo"
        />
        <p id="tentang-arkademi-paragraf-1">
          Arkademi adalah massive open online course (MOOC) platform karya anak
          bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill
          based learning atau pembelajaran berbasis keahlian yang diantarkan
          melalui kelas belajar dan kursus online melalui aplikasi Arkademi
          berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga
          kursus dapat membuka dan mengkomersialkan kelas onlinenya dan
          menjangkau siswa dari seluruh Indonesia.
        </p>
        <h5 id="tentang-arkademi-akselerator">Akselerator</h5>
        <p id="tentang-arkademi-paragraf-2">
          Arkademi adalah bagian program inkubasi dan akselerator dari
          perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon
          Web Service (Edstart Program) dan Y Combinator (Startup School) yang
          dipilih dari tech startup edukasi terbaik dunia.
        </p>
        <Image
          src="/Images/TentangAkselerator.svg"
          width={483}
          height={29}
          alt=""
        />
      </div>
    </div>
  );
};

export default TentangArkademi;
