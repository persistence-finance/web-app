import { useEffect, useState } from 'react'

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ width?: number, height?: number }>({ width: undefined, height: undefined });
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  
  return windowSize;
}

export function useMediaScale (min: [number, number], max: [number, number]) {
  const { width } = useWindowSize()
  if (!width) return min[1]
  if (width <= min[0]) return min[1]
  if (width >= max[0]) return max[1]

  const percent = (width - min[0]) / (max[0] - min[0])
  const portion = (max[1] - min[1]) * percent

  console.log(percent, portion, min[0])

  return min[1] + portion
}
