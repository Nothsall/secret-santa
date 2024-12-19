import React from 'react';
import '../styles/snow.css';

const Snowflakes = () => {
  const snowflakes = Array.from({ length: 50 });

  return (
    <>
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${Math.random() * 200}vw`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </>
  );
};

export default Snowflakes;