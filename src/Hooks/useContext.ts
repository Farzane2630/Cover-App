import { createContext } from "react";

interface Dimensions {
  width: number;
  height: number;
}

interface DeviceDimensionsContextProps {
  dimensions: Dimensions;
  checkDimensions: () => void;
}

export const Context = createContext<DeviceDimensionsContextProps>({
  dimensions: {
    width: 0,
    height: 0,
  },
  checkDimensions: () => {},
});
