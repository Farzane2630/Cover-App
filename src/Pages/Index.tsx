
// // App.js

// import React, { useState, useRef, useEffect } from 'react';
// import '../index.css'; // Import your Tailwind CSS file

// const Index = () => {
//   const [dragWidth, setDragWidth] = useState(0);
//   const [active, setActive] = useState(false);
//   const [currentX, setCurrentX] = useState(0);
//   const [initialX, setInitialX] = useState(0);
//   const [xOffset, setXOffset] = useState(0);

//   const dragItemRef = useRef(null);
//   const containerRef = useRef(null);
//   const beforeRef = useRef(null);
//   const afterRef = useRef(null);
//   const endRef = useRef(null);

//   useEffect(() => {
//     setDragWidth(containerRef.current.clientWidth - dragItemRef.current.clientWidth - 20);

//     const dragStart = (e) => {
//       setDragWidth(containerRef.current.clientWidth - dragItemRef.current.clientWidth - 20);
//       const touchX = e.type === 'touchstart' ? e.touches[0].clientX - xOffset : e.clientX - xOffset;
//       setInitialX(touchX);

//       if (e.target === dragItemRef.current) {
//         setActive(true);
//       }
//     };

//     const dragEnd = (e) => {
//       if (currentX < dragWidth - 5) {
//         animateBack();
//       } else {
//         completed();
//       }

//       setInitialX(currentX);
//       setActive(false);
//     };

//     const drag = (e) => {
//       if (active) {
//         e.preventDefault();

//         const touchX = e.type === 'touchmove' ? e.touches[0].clientX - initialX : e.clientX - initialX;
//         setCurrentX(touchX);

//         if (currentX > 0 && currentX < dragWidth) {
//           setTranslate(currentX, dragItemRef);
//         }
//       }
//     };

//     containerRef.current.addEventListener('touchstart', dragStart, false);
//     containerRef.current.addEventListener('touchend', dragEnd, false);
//     containerRef.current.addEventListener('touchmove', drag, false);

//     containerRef.current.addEventListener('mousedown', dragStart, false);
//     containerRef.current.addEventListener('mouseup', dragEnd, false);
//     containerRef.current.addEventListener('mousemove', drag, false);

//     return () => {
//       containerRef.current.removeEventListener('touchstart', dragStart);
//       containerRef.current.removeEventListener('touchend', dragEnd);
//       containerRef.current.removeEventListener('touchmove', drag);

//       containerRef.current.removeEventListener('mousedown', dragStart);
//       containerRef.current.removeEventListener('mouseup', dragEnd);
//       containerRef.current.removeEventListener('mousemove', drag);
//     };
//   }, [active, currentX, dragWidth, initialX, xOffset]);

//   const setTranslate = (xPos, el) => {
//     el.current.style.transform = `translate3d(${xPos}px, 0, 0)`;
//     endRef.current.style.opacity = 0;
//     if (xPos > dragWidth / 2) {
//       afterRef.current.style.opacity = 1;
//       beforeRef.current.style.opacity = 0;
//       containerRef.current.style.backgroundColor = 'rgb(25, 233, 118)';
//     } else {
//       afterRef.current.style.opacity = 0;
//       beforeRef.current.style.opacity = 1;
//       containerRef.current.style.backgroundColor = 'rgb(66, 79, 227)';
//     }
//   };

//   const animateBack = () => {
//     // turn off/on animations to speed up the fallback
//     dragItemRef.current.classList.toggle('animate');
//     containerRef.current.classList.toggle('animate');
//     beforeRef.current.classList.toggle('animate');
//     afterRef.current.classList.toggle('animate');
//     setTranslate(0, dragItemRef);
//     setTimeout(() => {
//       // wait for the animation is done before turning animations back on/off
//       dragItemRef.current.classList.toggle('animate');
//       containerRef.current.classList.toggle('animate');
//       beforeRef.current.classList.toggle('animate');
//       afterRef.current.classList.toggle('animate');
//     }, 600);
//   };

//   const completed = () => {
//     endRef.current.style.opacity = 1;
//     afterRef.current.style.opacity = 0;
//     beforeRef.current.style.opacity = 0;
//     alert('Confirmed!');
//   };

//   return (
//     <div id="outerContainer">
//       <div ref={containerRef} className="track_drag animate">
//         <div ref={dragItemRef} id="item"></div>
//         <p ref={endRef} className="track_text track_text--end animate">
//           Confirmed
//         </p>
//         <p ref={afterRef} className="track_text track_text--after animate">
//           Confirming...
//         </p>
//         <p ref={beforeRef} className="track_text track_text--before animate">
//           Slide to Confirm
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Index;

