import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row" id="row-footer">
        <div className="col" id="row-column">
          <h5 className="">Kategori Populer</h5>
          <ul>
            <li>
              <Link href="/">Keuangan</Link>
            </li>

            <li>
              <Link href="/">Perpajakan</Link>
            </li>

            <li>
              <Link href="/">Bisnis</Link>
            </li>

            <li>
              <Link href="/">Marketing</Link>
            </li>

            <li>
              <Link href="/">Kewirausahaan</Link>
            </li>

            <li>
              <Link href="/">Investasi</Link>
            </li>
          </ul>
        </div>
        <div className="col" id="row-column">
          <h5 className="">Lainnya</h5>
          <ul>
            <li>
              <Link href="/">Panduan</Link>
            </li>

            <li>
              <Link href="/">FAQ</Link>
            </li>

            <li>
              <Link href="/">Tentang Kami</Link>
            </li>

            <li>
              <Link href="/">Karier</Link>
            </li>

            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col" id="row-column">
          <h5 className="">Metode Pembayaran</h5>
          <Image
            src="/Images/FooterPembayaran.svg"
            width={300}
            height={94}
            alt=""
          />
        </div>
        <div className="col" id="footer-ikuti-kami">
          <h5 className="">Ikuti Kami</h5>
          <div className="d-flex gap-2">
            <Link href="/">
              <Image
                src="/Images/FooterSocmedFacebook.svg"
                width={33}
                height={33}
                alt=""
              />
            </Link>

            <Link href="/">
              <Image
                src="/Images/FooterSocmedYoutube.svg"
                width={33}
                height={33}
                alt=""
              />
            </Link>

            <Link href="/">
              <Image
                src="/Images/FooterSocmedInstagram.svg"
                width={33}
                height={33}
                alt=""
              />
            </Link>

            <Link href="/">
              <Image
                src="/Images/FooterSocmedLinkedin.svg"
                width={33}
                height={33}
                alt=""
              />
            </Link>
          </div>
          <h5 className="mt-3">Arkademi Mobile App</h5>
          <div className="d-flex gap-2">
            <Link href="/">
              <Image
                src="/Images/FooterMobileAndroid.svg"
                width={134}
                height={41}
                alt=""
              />
            </Link>

            <Link href="/">
              <Image
                src="/Images/FooterMobileIos.svg"
                width={134}
                height={41}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
