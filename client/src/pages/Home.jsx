import { React, useEffect } from "react";
import Hero from "../components/Home/Hero";
import MissionVision from "../components/Home/MissionVision";
import OurBrands from "../components/Home/OurBrands";

export default function Home() {
  return (
    <>
      <Hero />
      <OurBrands />
      <MissionVision />
    </>
  );
}
