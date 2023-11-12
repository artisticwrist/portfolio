import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
        return;
      }

      currentText += text[currentIndex];
      setTypedText(currentText);
      currentIndex++;
    }, 100); 

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return <span>{typedText}</span>;
};

export default TypingAnimation;
