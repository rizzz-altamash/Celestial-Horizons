import { useEffect, useState, useRef } from "react";

const useSmoothScroll = (scrollSpeed = 2) => {
  const [scrollDirection, setScrollDirection] = useState(0);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        
        const direction = event.key === "ArrowDown" ? 1 : -1;

        if (!scrollInterval.current) {
          scrollInterval.current = setInterval(() => {
            window.scrollBy(0, direction * scrollSpeed);
          }, 16); // Approx. 60FPS (1000ms / 60 ≈ 16ms)
        }

        setScrollDirection(direction);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(scrollInterval.current);
    };
  }, [scrollSpeed]);

};

export default useSmoothScroll;