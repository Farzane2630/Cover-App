import { useContext, useEffect, useState } from 'react';
import { Context } from './useContext';

interface Dimensions {
  width: number;
  height: number;
}

export const useDeviceDimensionsContext = () => {
  const dimensionsContext = useContext(Context);

  const [isDimensionsChanged, setisDimensionsChanged] = useState(false);

  const checkDimensions = () => {
    const currentDimensions: Dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    if (
      currentDimensions.width !== dimensionsContext.dimensions.width ||
      currentDimensions.height !== dimensionsContext.dimensions.height
    ) {
      setisDimensionsChanged(true);
    } 
  };

  useEffect(() => {
    checkDimensions();
  }, [dimensionsContext.dimensions]);

  useEffect(() => {
    const handleResize = () => {
      checkDimensions();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDimensionsChanged;
};