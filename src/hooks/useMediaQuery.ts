import { useState, useEffect } from 'react';

const useMediaQuery = (threshold = 768, delay = 200) => {
  const [isBelowThreshold, setIsBelowThreshold] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < threshold : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsBelowThreshold(window.innerWidth < threshold);
      }, delay);
    };

    window.addEventListener("resize", handleResize);

    // Initial check (in case of hydration mismatch)
    handleResize();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold, delay]);

  return isBelowThreshold;
};

export default useMediaQuery;
