import React from 'react';

const LoaderAnimation: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
      zIndex: 9999, // Ensure it's on top
    }}>
      <iframe
        src="https://cdn.svgator.com/images/2023/06/newtons-cradle-animation.svg"
        title="Loader Animation"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default LoaderAnimation; 