// imageData.js
const images = import.meta.glob(
  "../assets/img/equipments/waher-extractor/**/*.{jpg,png,jpeg}",
  { eager: true }
);

const shortNote = [
  `High spin washer extractor`,
  `Low spin washer extractor`,
  `High spin washer extractor`,
  `Low spin washer extractor`,
];

// Hardcoded descriptions for each image
const descriptions = [
  `• User friendly and totally programmable 7”. • USB Connection. Online platform free of charge for  programming, telemetry, data analysis… thanks to the IoT. • 37 languages. • 8 dosing signals as standard. • High G-Factor: G-FACTOR 500 for high spin washers. • Intelligent consumption. • Optimal loading. • Water Recovery tanks ready: KRS. • Low water consumption.`,
  `• User friendly and totally programmable 7”. • USB Connection. Online platform free of charge for  programming, telemetry, data analysis…thanks to the IoT. • 37 languages. • 8 dosing signals as standard8 dosing. • High G-Factor of 200. EFFICIENCY • Intelligent consumption. • Optimal loading. • Low water consumption.`,

  `• Freestanding, high spin washer
• Stainless steel cabinet, drum and tub
• Patented soap hopper with 5 removable
compartments
• Easy access to all vital parts from the
front
• Large door opening for easy loading &
unloading
• Two large drain valves (Ø 103 mm)
• USB plug located on the main board
• Frequency controlled motor
• Air operated water inlet and drain valve
• Liquid soap connection and pumps
• XControl FLEX PLUS – fully programmable
and customizable cycles 7" touch screen.
• User-friendly screen with operating
instructions built in as part of the control
• Complete control content available in 34
languages
• XControl – fully programmable control with
20 Pre-set programs and memory up to 99.
`,
  `• Rigid mounted, normal spin, up to 200G
factor
• Stainless steel drum and tub
• Patented soap hopper
• Easy access to all vital parts from the
front
• Large door opening for easy loading &
unloading
• Large drain valve (Ø 76 mm)
• Stainless steel front and side panels
• Liquid soap connection and pumps
• Electric steam heating version
• XControl – fully programmable control with
20 Pre-set programs and memory up to 99.`,
];

// Function to get images based on brand and add description
export const getWasherExtractorByBrand = (brand) => {
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
