import { useEffect } from "react";

export default function useToggleScrolled() {
  useEffect(() => {
    const toggleScrolled = () => {
      const body = document.body;
      const header = document.getElementById("header");
      if (!header) return;

      const hasStickyClass =
        header.classList.contains("scroll-up-sticky") ||
        header.classList.contains("sticky-top") ||
        header.classList.contains("fixed-top");

      if (hasStickyClass) {
        window.scrollY > 100
          ? body.classList.add("scrolled")
          : body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);
}
