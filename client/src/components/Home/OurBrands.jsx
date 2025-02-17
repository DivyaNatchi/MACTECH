import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "../../assets/styles/components/home/ourBrands.css";

// Import your brands images
import client1 from "../../assets/img/brands/topBrands/ADC.png";
import client2 from "../../assets/img/brands/topBrands/BMM.png";
import client3 from "../../assets/img/brands/topBrands/CCS.png";
import client4 from "../../assets/img/brands/topBrands/chicago.png";
import client5 from "../../assets/img/brands/topBrands/comel.png";
import client6 from "../../assets/img/brands/topBrands/electrolux.png";
import client7 from "../../assets/img/brands/topBrands/energenics.png";
import client8 from "../../assets/img/brands/topBrands/fogor.png";
import client9 from "../../assets/img/brands/topBrands/forenta.jpg";
import client10 from "../../assets/img/brands/topBrands/tolon.png";
import client11 from "../../assets/img/brands/topBrands/hoffman.png";
import client12 from "../../assets/img/brands/topBrands/thermotex.png";
import client13 from "../../assets/img/brands/topBrands/huebsch.png";
import client14 from "../../assets/img/brands/topBrands/italclean.jpg";
import client14 from "../../assets/img/brands/topBrands/maxi.png";
import client15 from "../../assets/img/brands/topBrands/primus.png";
import client16 from "../../assets/img/brands/topBrands/rema.png";
import client17 from "../../assets/img/brands/topBrands/sankosha.png";
import client18 from "../../assets/img/brands/topBrands/severnside-fabrics.png";
import client19 from "../../assets/img/brands/topBrands/thermopatch.png";
import client20 from "../../assets/img/brands/topBrands/unipress.png";

export default function OurBrands() {
  const brands = [
    { img: client1, alt: "ADC" },
    { img: client2, alt: "BMM" },
    { img: client3, alt: "CCS" },
    { img: client4, alt: "Chicago" },
    { img: client5, alt: "Comel" },
    { img: client6, alt: "Electrolux" },
    { img: client7, alt: "Energenics" },
    { img: client8, alt: "Fogor" },
    { img: client9, alt: "Forenta" },
    { img: client10, alt: "Tolon" },
    { img: client11, alt: "Hoffman" },
    { img: client12, alt: "Thermotex" },
    { img: client13, alt: "Huebsch" },
    { img: client14, alt: "Italclean" },
    { img: client15, alt: "Maxi" },
    { img: client15, alt: "Primus" },
    { img: client16, alt: "Rema" },
    { img: client17, alt: "Sankosha" },
    { img: client18, alt: "Severnside-fabrics" },
    { img: client19, alt: "Thermopatch" },
    { img: client20, alt: "unipress" },
  ];

  return (
    <section id="brands" className="brands section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Top Brands</h2>
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
          {brands.map((client, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={client.img} className="img-fluid" alt={client.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
