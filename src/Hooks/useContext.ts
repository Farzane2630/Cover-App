import { createContext } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

interface DeviceDimensionsContextProps {
  dimensions: Dimensions;
  setDimensions: React.Dispatch<React.SetStateAction<Dimensions>>;
}

export const Context = createContext<DeviceDimensionsContextProps>({
  dimensions: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  setDimensions: () => {},
});