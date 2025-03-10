// imageData.js
const images = import.meta.glob(
  "../assets/img/equipments/garment_finishing/**/*.{jpg,png,jpeg}",
  { eager: true }
);

const shortNote = [
  `Forenta`,
  `Forenta`,
  "Rotondi",
  "Rotondi",
  "pending",
  "pending",
  "pending",
  "pending",
  "pending",
  "pending",
  "pending",
  "pending",
  "Rotondi",
];

// Hardcoded descriptions for each image
const descriptions = [
  `Two Head Control	
Dual Cylinder Provides maximum pressing quality
Designed to press cuff and collar`,
  `pending`,
  `Triple form, a collar and two cuffs.
• Mirror polished head in stainless steel.
• Head heated with steam (BL CLP/V) or electrically (BL CLP/E - 3.1 kW).
• Buck cold or steam-heated or electric heated with connection for vacuum.
• Pressing pressure adjustable.
• Two-button closing with device for simultaneous operation.
• Accident-prevention protection on the head.
• Pressure timer.
• 3-layer lower padding with pure silicon foam.
`,
  `Pneumatic (BL) or manual (BX) pressing machines for ironing jackets, overcoats,
pants etc. Head with steaming. Buck with vacuum and steaming. Adjustable pressing
pressure. Accident-prevention protection on head. Lower padding of 5 layers with
pure silicon foam. Available with or without built-in electric steam generator meeting PED standards
- capacity 24.5 litres - 12 or 15 or 18 kW - and high-pressure vacuum motor 0.6
kW - 0.8 HP.
`,
  `pending`,
  `pending`,
  `pending`,
  `pending`,
  `pending`,
  `pending`,
  `pending`,
  `pending`,
  `Super-powerful vacuum with high-depression motor at 0.6 kW - 0.8 HP.
• Electrically heated form at 130x65cm.
• Special forms upon request for ironing of curtains (series 1970)
• 3-layer padding.
• Silicon iron support. Whip spring.
• Vertical air discharge chimney.
`,
];

// Function to get images based on brand and add description
export const getGarmentFinishingByBrand = (brand) => {
  return Object.keys(images)
    .map((path, index) => {
      const imageName = path
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, ""); // Extract file name as title

      // Check if the path contains the correct brand folder (e.g., kannegiesser or natronic)
      if (brand && !path.includes(brand)) {
        return null; // Filter out images not in the correct brand folder
      }

      // Returning image, title, and a random description from the array
      return {
        img: images[path].default,
        title: imageName,
        shortNote: shortNote[index % shortNote.length], // Use shortNote in a cyclic manner
        description: descriptions[index % descriptions.length], // Use descriptions in a cyclic manner
      };
    })
    .filter(Boolean); // Filter out nulls
};
