import React, { useState, useEffect } from "react";

function Services() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".services-section h1");
      const text = document.querySelector(".services-section p");
      const headerDistance = header.getBoundingClientRect().top;
      const textDistance = text.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      const triggerDistance = screenHeight * 0.9; // Change this value to adjust when the animation should trigger

      if (headerDistance < triggerDistance && textDistance < triggerDistance) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="services-section services">
      <div className="about monserrat-font">
        <p className="about-text paragraph-size">
          Blending my passions for Visual Art and Illustration with the
          technical prowess of a Full Stack Web Developer, I strive to create
          immersive digital experiences that captivate users, leaving a lasting
          impression; backed by a solid educational foundation as a proud
          graduate of Computer Engineering from Madonna University.
        </p>
        <div className="services-stacks monserrat-font ">
          <ul className="services">
            <p>Front-end</p>
            <li>Vanilla js</li>
            <li>React</li>
            <li>Html</li>
            <li>Css</li>
          </ul>
          <ul className="stacks">
            <p>Back-end</p>
            <li>Php</li>
            <li>Laravel</li>
            <li>Github</li>
            <li>Mysql</li>
          </ul>
        </div>
      </div>
      <aside className="barlow-font">
        <h1
          className={`scroll-animation ${
            isScrolled ? "scrolled" : ""
          } header-size`}
        >
          ABOUT JOSEPH
        </h1>
      </aside>
    </section>
  );
}

export default Services;
