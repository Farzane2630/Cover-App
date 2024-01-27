import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Context } from './useContext';

export const useDeviceDimensionsContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useDeviceDimensionsContext must be used within a DeviceDimensionsProvider');
  }
  return context;
};

// export const DeviceDimensionsProvider: React.FC<DeviceDimensionsProviderProps> = ({ children }) => {
//   const [dimensions, setDimensions] = useState<Dimensions>({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const checkDimensions = () => {
//     const currentDimensions: Dimensions = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//     if (
//       currentDimensions.width !== dimensions.width ||
//       currentDimensions.height !== dimensions.height
//     ) {
//       console.error('Error: Device dimensions have changed.');
//     }
//   };

//   useEffect(() => {
//     checkDimensions();
//   }, [dimensions]);

//   useEffect(() => {
//     const handleResize = () => {
//       checkDimensions();
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const contextValue: DeviceDimensionsContextProps = {
//     dimensions,
//     checkDimensions,
//   };

//   return (
//     <DeviceDimensionsContext.Provider value={contextValue}>
//       {children}
//     </DeviceDimensionsContext.Provider>
//   );
// };
