import { useEffect, useState } from "react"
export default function Step1() {
  const columns = 8;
  const rows = 14;

  const [rectangles, setRectangles] = useState<boolean[]>([]);
  const [rectangleWidth, setRectangleWidth] = useState<number>((((window.innerWidth - 42) - (columns * 8)) / columns));
  const [rectangleHeight, setRectangleHeight] = useState<number>((((window.innerHeight - 35) - (rows * 8)) / rows));

  const calculateRectangles = () => {
    setRectangleWidth((((window.innerWidth -42) - (columns * 8)) / columns));

    setRectangleHeight((((window.innerHeight - 35) - (rows * 8)) / rows))

    setRectangles(Array(rows * columns).fill(false));
  }

  useEffect(() => {
    calculateRectangles()
    window.addEventListener('resize', () => {
      calculateRectangles()
    });

  }, [rectangleHeight, rectangleWidth]);

  const handleTouchStart = (index: number) => {
    const updatedRectangles = [...rectangles];
    updatedRectangles[index] = true;
    setRectangles(updatedRectangles);
  };

  const handleTouchMove = (index: number) => {
    if (rectangles[index] === false) {
      const updatedRectangles = [...rectangles];
      updatedRectangles[index] = true;
      setRectangles(updatedRectangles);
    }
  };

  const renderRectangles = () => {
    return rectangles.map((isTouched, index) => (
      <div
        key={index}
        className={`rectangle ${isTouched ? 'touched' : ''}`}
        style={{ width: `${rectangleWidth}px`, height: `${rectangleHeight}px` }}
        onTouchStart={() => handleTouchStart(index)}
        onTouchMove={() => handleTouchMove(index)}
      />
    ));
  };

  return <div className="touch-test-container" style={{ maxHeight: window.innerHeight }}>{renderRectangles()}</div>;
};



