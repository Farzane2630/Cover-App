import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

function Camera(chooseCamera: string) {
   const webcamRef = useRef(null);
   const [imgSrc, setImgSrc] = useState(null);

   const videoConstraints = {
      width: { min: 480 },
      height: { min: 720 },
      facingMode: chooseCamera,
   };

   const capture = useCallback(() => {
      // @ts-ignore
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
   }, [webcamRef]);

   const retake = () => {
      setImgSrc(null);
   };

   return (
      <div>
         {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
         ) : (
            <Webcam
               height={window.innerHeight}
               width={window.innerWidth}
               ref={webcamRef}
               videoConstraints={videoConstraints}
            />
         )}
         <div className="btn-container">
            {imgSrc ? (
               <button onClick={retake}>Retake photo</button>
            ) : (
               <button onClick={capture}>Capture photo</button>
            )}
         </div>
      </div>
   )
}

export default Camera