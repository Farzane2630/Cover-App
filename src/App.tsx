import React, { useEffect, useState } from 'react';
import { Context } from './Hooks/useContext';
// @ts-ignore
import AllRoutes from './Routes';
import { useDeviceDimensionsContext } from './Hooks/useDeviceDimensionsContext';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
    <NextUIProvider style={{ width: "100%", height: "100%" }}>
      <Context.Provider
        value={{
          dimensions: dimensions,
          setDimensions: setDimensions,
        }}
      >
        {
          isMobile ? (
            <div className={`w-full h-full`}>
              <AllRoutes />
            </div>
          ) : (
            <h1>You are Browsing with a window, use a mobile phone!</h1>
          )
        }
      </Context.Provider>
    </NextUIProvider>
  );
}

export default App;