import React, { useState } from 'react';
import { Context } from './Hooks/useContext';
// @ts-ignore
import AllRoutes from './Routes';
import { useDeviceDimensionsContext } from './Hooks/useDeviceDimensionsContext';
import { NextUIProvider } from '@nextui-org/react';

interface Dimensions {
  width: number;
  height: number;
}

function App() {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isDimensionsChanged = useDeviceDimensionsContext();

  return (
    <NextUIProvider style={{width: "100%", height:"100%"}}>
    <Context.Provider
      value={{
        dimensions: dimensions,
        setDimensions: setDimensions,
      }}
      >
      <div className={`w-full h-full`}>
        {!isDimensionsChanged ? <AllRoutes /> : <h1>Your device has been changed!</h1>}
      </div>
    </Context.Provider>
     </NextUIProvider>
  );
}

export default App;