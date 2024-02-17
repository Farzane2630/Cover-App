import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { saveSelfie, saveRear } from "../../../Redux/Reducers/Images"
import { useNavigate } from "react-router-dom";

function Camera({ chooseCamera }: { chooseCamera: string }) {
   const navigate = useNavigate()
   const webcamRef = useRef(null);
   const [imgSrc, setImgSrc] = useState(null);
   // @ts-ignore
   const savedPhotos = useSelector(state => state.savePhotos)
   const dispatch = useDispatch()

   const videoConstraints = {
      width: { min: 480 },
      height: { min: 720 },
      facingMode: chooseCamera,
   };

   const capture = useCallback(() => {
      // @ts-ignore
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);

      chooseCamera === "user" ?
         dispatch(saveSelfie(imageSrc)) && navigate("/guidance/step-4") :
         dispatch(saveRear(imageSrc)) && navigate("/test-3-2")
   }, [webcamRef]);

   // const retake = () => {
   //    setImgSrc(null);
   // };

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
            <button onClick={capture}>Capture photo</button>
         </div>
      </div>
   )
}

export default Camera