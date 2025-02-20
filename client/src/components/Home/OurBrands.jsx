import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "../../assets/styles/components/home/ourBrands.css";

// Import your brands images
import brand1 from "../../assets/img/brands/topBrands/ADC.png";
import brand2 from "../../assets/img/brands/topBrands/BMM.png";
import brand3 from "../../assets/img/brands/topBrands/CCS.png";
import brand4 from "../../assets/img/brands/topBrands/chicago.png";
import brand5 from "../../assets/img/brands/topBrands/comel.png";
import brand6 from "../../assets/img/brands/topBrands/electrolux.png";
import brand7 from "../../assets/img/brands/topBrands/energenics.png";
import brand8 from "../../assets/img/brands/topBrands/fogor.png";
import brand9 from "../../assets/img/brands/topBrands/forenta.jpg";
import brand10 from "../../assets/img/brands/topBrands/tolon.png";
import brand11 from "../../assets/img/brands/topBrands/hoffman.png";
import brand12 from "../../assets/img/brands/topBrands/thermotex.png";
import brand13 from "../../assets/img/brands/topBrands/huebsch.png";
import brand14 from "../../assets/img/brands/topBrands/italclean.jpg";
import brand15 from "../../assets/img/brands/topBrands/maxi.png";
import brand16 from "../../assets/img/brands/topBrands/primus.png";
import brand17 from "../../assets/img/brands/topBrands/rema.png";
import brand18 from "../../assets/img/brands/topBrands/sankosha.png";
import brand19 from "../../assets/img/brands/topBrands/severnside-fabrics.png";
import brand20 from "../../assets/img/brands/topBrands/thermopatch.png";
import brand21 from "../../assets/img/brands/topBrands/unipress.png";

export default function OurBrands() {
  const brands = [
    { img: brand1, alt: "ADC" },
    { img: brand2, alt: "BMM" },
    { img: brand3, alt: "CCS" },
    { img: brand4, alt: "Chicago" },
    { img: brand5, alt: "Comel" },
    { img: brand6, alt: "Electrolux" },
    { img: brand7, alt: "Energenics" },
    { img: brand8, alt: "Fogor" },
    { img: brand9, alt: "Forenta" },
    { img: brand10, alt: "Tolon" },
    { img: brand11, alt: "Hoffman" },
    { img: brand12, alt: "Thermotex" },
    { img: brand13, alt: "Huebsch" },
    { img: brand14, alt: "Italclean" },
    { img: brand15, alt: "Maxi" },
    { img: brand16, alt: "Primus" },
    { img: brand17, alt: "Rema" },
    { img: brand18, alt: "Sankosha" },
    { img: brand19, alt: "Severnside-fabrics" },
    { img: brand20, alt: "Thermopatch" },
    { img: brand21, alt: "unipress" },
  ];

  return (
    <section id="brands" className="brands section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Brands</h2>
      </div>
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 40 },
            480: { slidesPerView: 3, spaceBetween: 60 },
            640: { slidesPerView: 4, spaceBetween: 80 },
            992: { slidesPerView: 6, spaceBetween: 120 },
          }}
          className="swiper-wrapper align-items-center"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={brand.img} className="img-fluid" alt={brand.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
