// import React, { useState, useEffect } from 'react';

// const SlideAnimation = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const container = document.getElementById('slide-up-container');
//     const containerTop = container.offsetTop;
//     const scrollPosition = window.scrollY + window.innerHeight;

//     if (scrollPosition > containerTop) {
//       setIsVisible(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="slide-up-container"
//       className={`slide-up-animation ${isVisible ? 'visible' : ''}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default SlideAnimation;
