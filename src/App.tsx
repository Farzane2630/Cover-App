import { useEffect, useState } from "react";
import { Context } from "./Hooks/useContext";
interface Dimensions {
  width: number;
  height: number;
}

function App() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const checkDimensions = () => {
    const currentDimensions: Dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    if (
      currentDimensions.width !== dimensions.width ||
      currentDimensions.height !== dimensions.height
    ) {
      console.error('Error: Device dimensions have changed.');
    }
  };

  useEffect(() => {
    checkDimensions();
  }, [dimensions]);

  useEffect(() => {
    const handleResize = () => {
      checkDimensions();
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Context.Provider value={{
      dimensions: dimensions,
      checkDimensions: checkDimensions
    }}>
    </Context.Provider>
  );
}

export default App
