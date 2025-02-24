// imageData.js
const images = import.meta.glob(
  "../assets/img/equipments/**/*.{jpg,png,jpeg}",
  { eager: true }
);

// Hardcoded descriptions for each image
const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam urna ut quam vehicula, id rutrum lorem scelerisque.",
  "Nullam vel sapien ac lectus tristique dictum vel ac odio. Ut sed risus orci. Nulla lacinia metus vitae mauris placerat condimentum.",
  "Aenean ac risus felis. Nulla ut ullamcorper turpis, nec auctor felis. Aliquam suscipit, erat ac lacinia ullamcorper, felis turpis tristique urna.",
  "Sed feugiat, nisl ut auctor volutpat, libero magna suscipit nisl, a tempor urna leo vitae eros. Donec sit amet velit ut leo feugiat feugiat.",
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
        description: descriptions[index % descriptions.length], // Use descriptions in a cyclic manner
      };
    })
    .filter(Boolean); // Filter out nulls
};
