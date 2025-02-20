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

export default function SpareParts() {
  const [washerExtractorQuery, setWasherExtractorQuery] = useState("");
  const [dryerQuery, setDryerQuery] = useState("");

  // Filter Washer Extractor based on search input
  const filteredWasherExtractorSpareParts = washerExtractorSpareparts.filter(
    (part) =>
      part.title.toLowerCase().includes(washerExtractorQuery.toLowerCase())
  );

  // Filter Dryer based on search input
  const filteredDryerSpareParts = dryerSpareparts.filter((part) =>
    part.title.toLowerCase().includes(dryerQuery.toLowerCase())
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
    </section>
  );
}
