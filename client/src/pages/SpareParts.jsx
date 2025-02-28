import React, { useState } from "react";
import { Input } from "reactstrap";
import SparePartsSwiper from "../components/SparePartsSwiper";
import "../assets/styles/components/spareParts.css";

// Import all Washer Extractor images using import.meta.glob
const washerExtractorImages = import.meta.glob(
  "../assets/img/spare_parts/WasherExtractor/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Import all Dryer images using import.meta.glob
const dryerImages = import.meta.glob(
  "../assets/img/spare_parts/Dryer/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Import all Flat Ironer images using import.meta.glob
const flatIronerImages = import.meta.glob(
  "../assets/img/spare_parts/FlatIroner/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Import all Garment Finishing Equipment images using import.meta.glob
const garmentFinishingEquipmentImages = import.meta.glob(
  "../assets/img/spare_parts/GarmentFinishingEquipment/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Import all Boiler images using import.meta.glob
const boilerImages = import.meta.glob(
  "../assets/img/spare_parts/Boiler/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

// Mapping and formatting images
const washerExtractorSpareparts = Object.keys(washerExtractorImages).map(
  (key) => {
    const fileName = key
      .split("/")
      .pop()
      .split("_")
      .slice(1)
      .join(" ")
      .replace(/\.[^/.]+$/, "");
    return {
      img: washerExtractorImages[key].default,
      title: fileName,
    };
  }
);

const dryerSpareparts = Object.keys(dryerImages).map((key) => {
  const fileName = key
    .split("/")
    .pop()
    .split("_")
    .slice(1)
    .join(" ")
    .replace(/\.[^/.]+$/, "");
  return {
    img: dryerImages[key].default,
    title: fileName,
  };
});

const flatIronerSpareparts = Object.keys(flatIronerImages).map((key) => {
  const fileName = key
    .split("/")
    .pop()
    .split("_")
    .slice(1)
    .join(" ")
    .replace(/\.[^/.]+$/, "");
  return {
    img: flatIronerImages[key].default,
    title: fileName,
  };
});

const garmentFinishingEquipmentSpareparts = Object.keys(
  garmentFinishingEquipmentImages
).map((key) => {
  const fileName = key
    .split("/")
    .pop()
    .split("_")
    .slice(1)
    .join(" ")
    .replace(/\.[^/.]+$/, "");
  return {
    img: garmentFinishingEquipmentImages[key].default,
    title: fileName,
  };
});

const boilerSpareparts = Object.keys(boilerImages).map((key) => {
  const fileName = key
    .split("/")
    .pop()
    .split("_")
    .slice(1)
    .join(" ")
    .replace(/\.[^/.]+$/, "");
  return {
    img: boilerImages[key].default,
    title: fileName,
  };
});

// Helper function to filter spare parts based on query
const filterSpareParts = (spareParts, query) => {
  return spareParts.filter((part) =>
    part.title.toLowerCase().includes(query.toLowerCase())
  );
};

export default function SpareParts() {
  const [washerExtractorQuery, setWasherExtractorQuery] = useState("");
  const [dryerQuery, setDryerQuery] = useState("");
  const [flatIronerQuery, setFlatIronerQuery] = useState("");
  const [garmentFinishingEquipmentQuery, setGarmentFinishingEquipmentQuery] =
    useState("");
  const [boilerQuery, setBoilerQuery] = useState("");

  const filteredWasherExtractorSpareParts = filterSpareParts(
    washerExtractorSpareparts,
    washerExtractorQuery
  );

  const filteredDryerSpareParts = filterSpareParts(dryerSpareparts, dryerQuery);

  const filteredFlatIronerSpareParts = filterSpareParts(
    flatIronerSpareparts,
    flatIronerQuery
  );

  const filteredGarmentFinishingEquipmentSpareParts = filterSpareParts(
    garmentFinishingEquipmentSpareparts,
    garmentFinishingEquipmentQuery
  );

  const filteredBoilerSpareParts = filterSpareParts(
    boilerSpareparts,
    boilerQuery
  );

  return (
    <section id="spare-parts" className="spare-parts section">
      {/* Washer Extractor Section */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Washer Extractor Spare Parts</h2>
        <Input
          type="text"
          placeholder="Search Washer Extractor parts"
          value={washerExtractorQuery}
          onChange={(e) => setWasherExtractorQuery(e.target.value)}
        />

        {/* Display 'No matching results' message under the search box */}
        {filteredWasherExtractorSpareParts.length === 0 && (
          <p className="no-match mt-2">No matching results found</p>
        )}
      </div>
      {/* Pass all items if no results match, otherwise pass the filtered results */}
      <SparePartsSwiper
        spareParts={
          filteredWasherExtractorSpareParts.length === 0
            ? washerExtractorSpareparts // All items if no match
            : filteredWasherExtractorSpareParts
        }
      />

      {/* Dryer Section */}
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Dryer Spare Parts</h2>
        <Input
          type="text"
          placeholder="Search Dryer parts"
          value={dryerQuery}
          onChange={(e) => setDryerQuery(e.target.value)}
        />
        {/* Display 'No matching results' message under the search box */}
        {filteredDryerSpareParts.length === 0 && (
          <p>No matching results found</p>
        )}
      </div>
      {/* Reusable Swiper Component for Dryer */}
      <SparePartsSwiper
        spareParts={
          filteredDryerSpareParts.length === 0
            ? dryerSpareparts // All items if no match
            : filteredDryerSpareParts
        }
      />

      {/* Flat Ironer Section */}
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Flat Ironer Spare Parts</h2>
        <Input
          type="text"
          placeholder="Search Flat Ironer parts"
          value={flatIronerQuery}
          onChange={(e) => setFlatIronerQuery(e.target.value)}
        />
        {filteredFlatIronerSpareParts.length === 0 && (
          <p>No matching results found</p>
        )}
      </div>
      <SparePartsSwiper
        spareParts={
          filteredFlatIronerSpareParts.length === 0
            ? flatIronerSpareparts
            : filteredFlatIronerSpareParts
        }
      />

      {/* Boiler Section */}
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Boiler Spare Parts</h2>
        <Input
          type="text"
          placeholder="Search Boiler parts"
          value={boilerQuery}
          onChange={(e) => setBoilerQuery(e.target.value)}
        />
        {filteredBoilerSpareParts.length === 0 && (
          <p>No matching results found</p>
        )}
      </div>
      <SparePartsSwiper
        spareParts={
          filteredBoilerSpareParts.length === 0
            ? boilerSpareparts
            : filteredBoilerSpareParts
        }
      />

      {/* Garment Finishing Equipment Section */}
      <div className="container section-title mt-5" data-aos="fade-up">
        <h2>Garment Finishing Equipment Spare Parts</h2>
        <Input
          type="text"
          placeholder="Search Garment Finishing Equipment parts"
          value={garmentFinishingEquipmentQuery}
          onChange={(e) => setGarmentFinishingEquipmentQuery(e.target.value)}
        />
        {filteredGarmentFinishingEquipmentSpareParts.length === 0 && (
          <p>No matching results found</p>
        )}
      </div>
      <SparePartsSwiper
        spareParts={
          filteredGarmentFinishingEquipmentSpareParts.length === 0
            ? garmentFinishingEquipmentSpareparts
            : filteredGarmentFinishingEquipmentSpareParts
        }
      />
    </section>
  );
}
