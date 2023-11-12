import React, { useState, useEffect } from 'react';

const SlideUpAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`slide-up-animation ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default SlideUpAnimation;
