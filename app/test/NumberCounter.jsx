"use client"
import React, { useState, useEffect } from "react";
import "./NumberCounter.css"; // CSS for animations

const NumberCounter = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(null);

  useEffect(() => {
    if (currentNumber < targetNumber) {
      const timer = setTimeout(() => {
        setPreviousNumber(currentNumber); // Keep track of the current number for the fade-out animation
        setCurrentNumber((prev) => prev + 1);
      }, 800); // Delay between increments
      return () => clearTimeout(timer);
    }
  }, [currentNumber, targetNumber]);

  return (
    <div className="number-counter">
      <div className="number-wrapper">
        {previousNumber !== null && (
          <div className="number previous">{previousNumber}</div>
        )}
        <div className="number current">{currentNumber}</div>
      </div>
    </div>
  );
};

export default NumberCounter;
