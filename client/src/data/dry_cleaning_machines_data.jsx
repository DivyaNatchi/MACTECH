// imageData.js
const images = import.meta.glob(
  "../assets/img/equipments/dry_cleaning_machines/**/*.{jpg,png,jpeg}",
  { eager: true }
);

const shortNote = [`Dry Cleaning Machine`];

// Hardcoded descriptions for each image
const descriptions = [
  `Solvent Type: PERCHLOROETHYLENE • Loading charge: Kg 10 ÷ 12 • 3Self-Cleaning tanks • Type of Heating: ELECTRIC • Voltage: V. 380-400 / 3 ph / 50 Hz. • 1 NYLON ECOLOGICAL FILTERwith 14 Discs • Floor Safety containment tank • Micro Switches and security door locks • Automatic water safety valve - Danfoss • INVERTER for washing motor • Soundproofing fridge compressor cover • Automatic still wall washing system • Closed circuit with heat pump • Microprocessor DIALOG 600 • 20 programs available Memory card for backup date Continuous or periodical distillation phase • Still overflow control • Electronic temperatures control • Very large capacity still • Electric box in front of the machine • Main safety switch • Double lint filter • Button trap drying`,
];

// Function to get images based on brand and add description
export const getDryCleaningMachinesByBrand = (brand) => {
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
