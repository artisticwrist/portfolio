import Modal from "./Modal";
import capTotal from './images/crypto.png';
import gameEcommerce from './images/commerce.png';
import deApp from "./images/deapp.png";
import wristApp from './images/blackapp.png';
import counterApp from './images/counter.png';
import redactrApp from "./images/redARct.png";
import passswordGen from './images/password-gen.png';
import rpsGame from './images/rps.png';
import { useState, useEffect } from "react";


function Project() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".project-page h1");
      const text = document.querySelector(".project-page p");
      const projectSection = document.querySelector(".project-section");
      const headerDistance = header.getBoundingClientRect().top;
      const textDistance = text.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
      const triggerDistance = screenHeight * 1; // Change this value to adjust when the animation should trigger

      if (headerDistance < triggerDistance && textDistance < triggerDistance ) {
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

  const [fullstack, setFullstack] = useState(true);
  const [javascript, setJavascript] = useState(false);
  const [react, setReact] = useState(false);


  function fullstackClick(){
    setFullstack(true);
    setJavascript(false);
    setReact(false);
  }

  function jsClick(){
    setJavascript(true);
    setFullstack(false);
    setReact(false);
  }

  function reactClick(){
    setReact(true);
    setFullstack(false);
    setJavascript(false);
  }


// FULLSTACK PROJECTS
  const captotal = {
    name: "Wincoin",
    subText: "An Investment web app.",
    url: "https://https://github.com/artisticwrist/crypto",
    description:
      "This project is a cryptocurrency investment website that allows users to invest in various cryptocurrencies. The website has a user-friendly interface built using HTML, CSS, and JavaScript. The back-end of the website is powered by PHP, which enables the website to store user data securely and handle transactions. Users can sign up, log in, and manage their investment portfolios through the website. The website also provides real-time information about cryptocurrency prices, market trends, and investment tips.",
    stacks: "Stacks: php, javascript, html,css, bootstrap",
  };

  const gamex ={
    name:"Gamex",
    subText: "Purchase the latest game at GameX.",
    url:"https://github.com/artisticwrist/game-ecommerce.git",
    description: "This project is an ecommerce website designed for purchasing video games. The website has a user-friendly interface built using HTML, CSS, and JavaScript. The back-end of the website is powered by PHP, which enables the website to handle transactions securely and efficiently. Users can browse through a wide range of video games, filter their search results, and add their selected games to their shopping cart. This project has not been hosted yet but you view the github using the button below.",
    stacks: "Stacks: php, javascript,Jquery, html,css, bootstrap."
  }

  
  const deapp = {
    name: "DeApp",
    subText: "Social media project",
    url: "https://github.com/artisticwrist/deapp",
    description:
      "DeApp, my current project, is a social media platform for art built with HTML, CSS, and vanilla JavaScript for the frontend, PHP for the backend, and MySQL for the database. Similar to Instagram but exclusively for visual arts, it provides a user-friendly space for artists to share and enthusiasts to explore a diverse range of artworks. With a focus on simplicity and a robust backend, DeApp aims to be the go-to platform for creatives to showcase their talents and for art lovers to discover captivating visuals.",
    stacks: "Stacks: php, javascript, html,css, bootstrap.",
  };

  // REACT PROJECTS

  const pagination ={
    name:"pagination UI",
    subText: "Simple react app that implements pagination.",
    url: "https://react-altschool.netlify.app/",
    description: "This is a React application that utilizes pagination to break down a large dataset into smaller, more manageable chunks. It also features an error boundary to gracefully handle any unexpected errors that may occur during the app's runtime. In addition, the app includes a wildcard page to handle any invalid routes, ensuring a seamless user experience. Lastly, the app has implemented SEO best practices to optimize its search engine visibility and ranking.",
    stacks: "Stacks: react, html,css"
  }

  const counter ={
    name:"Counter App",
    subText: "Counter using useState and useReducer hook.",
    url:"https://modern-counter.netlify.app/",
    description: "This is a React counter application that uses both the useState and useReducer hooks to increment and decrement a numerical value based on user interaction. The app also features an error boundary to handle any unexpected errors that may occur during the app's runtime. Additionally, the app includes a wildcard page to handle any invalid routes, ensuring a seamless user experience. Lastly, the app has implemented SEO best practices to optimize its search engine visibility and ranking.",
    stacks: "Stacks: react, html, css"
  }

  // Vanilla  JS

  const passwordGenerator ={
    name:"Password Generator",
    subText: "Simple and secure password generator",
    url:"https://create-secure-password.netlify.app/",
    description: "This is a password generator application that allows users to customize the length and complexity of their password. Users can specify the desired length of the password and choose from various character sets (such as lowercase letters, uppercase letters, numbers, and special characters) to include in their password. The app then generates a random password based on the user's inputs. This project demonstrates a strong understanding of JavaScript fundamentals, including randomization, string manipulation, and user input validation.",
    stacks: "Stacks: javascript, html, css"
  }

  const rps ={
    name:"RPS Game",
    subText: "Beat the computer in a game of 10 to win.",
    url:"https://rockpaperscissors-by-joe.netlify.app/",
    description: "The Rock Paper Scissors game is a classic game that has been enjoyed by people of all ages for generations. In this project, you have created a digital version of this timeless game using vanilla JavaScript. The game allows players to choose between three options: rock, paper, or scissors, and then compares their choices to determine the winner. The project demonstrates your ability to create interactive web applications using JavaScript and showcases your skills in problem-solving, logic, and user interface design.",
    stacks: "Stacks: javascript, html, css"
  }

  const redactr ={
    name:"Redactr App",
    subText: "Altschool Africa challenge.",
    url:"https://axon-redactr.axonerd.repl.co/",
    description: "The word scramble web app created by axoNerd group at altschool Africa is an innovative tool that takes a word or sentence from a body of text and scrambles it. The app is built using vanilla js and is both easy to use and highly functional. With the app's copy feature, users can quickly copy the scrambled text to their clipboard for use in other applications. And with the share feature, they can easily share the scrambled sentence across multiple platforms, making it an ideal tool for social media marketers or anyone looking to share fun and engaging content.",
    stacks: "Stacks: javascript, html, css"
  }


  const [fullstackModal, setFullstackModal] = useState(false);
  const [fullstackModal2, setFullstackModal2] = useState(false);
  const [fullstackModal3, setFullstackModal3] = useState(false);
  const [reactModal, setReactModal] = useState(false);
  const [reactModal3, setReactModal3] = useState(false);
  const [vanillaModal, setVanillaModal] = useState(false);
  const [vanillaModal2, setVanillaModal2] = useState(false);
  const [vanillaModal3, setVanillaModal3] = useState(false);
  const [vanillaModal4, setVanillaModal4] = useState(false);


  function fullstack1(){
    setFullstackModal(true)

  }

  function fullstack2(){
    setFullstackModal2(true)
  }

    function fullstack3() {
      setFullstackModal3(true);
    }
  // REACT PROJECTS ONCLICK

  function react1(){
    setReactModal(true)
  }

  function react3(){
    setReactModal3(true)
  }


  // VANILLA PROJECT ONCLICK

  function vanilla1(){
    setVanillaModal(true)
  }

  function vanilla2(){
    setVanillaModal2(true)
  }

  function vanilla3(){
    setVanillaModal4(true)
  }





  // CLOSE MODAL

  function closeModal(){
    setFullstackModal(false)
    setFullstackModal2(false)
    setFullstackModal3(false);
    setReactModal(false)
    setReactModal3(false)
    setVanillaModal(false)
    setVanillaModal2(false)
    setVanillaModal3(false)
    setVanillaModal4(false)
  }


    return (
      <section className="project-page">
        <aside>
          <h1
            className={`scroll-animation ${
              isScrolled ? "scrolled" : ""
            }  header-size`}
          >
            Projects
          </h1>
          <p
            className={`scroll-animation ${
              isScrolled ? "scrolled" : ""
            } paragraph-size`}
          >
            Click any option below to view projects.
          </p>
        </aside>
        <section className="project-section" onMouseLeave={closeModal}>
          <div className="project-options">
            <div onClick={fullstackClick}>Fullstack</div>
            <div onClick={reactClick}>React Js</div>
            <div onClick={jsClick}>Vanilla Js</div>
          </div>
          {fullstack && (
            <div id="carouselExampleCaptions" className="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div className="carousel-item active" onClick={fullstack1}>
                  <img src={capTotal} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item" onClick={fullstack2}>
                  <img src={gameEcommerce} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div className="carousel-item" onClick={fullstack3}>
                  <img src={deApp} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}

          {react && (
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
              
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" onClick={react1}>
                  <img src={wristApp} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item" onClick={react3}>
                  <img src={counterApp} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          )}
          {javascript && (
            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" onClick={vanilla1}>
                  <img src={redactrApp} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item" onClick={vanilla2}>
                  <img src={passswordGen} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item" onClick={vanilla3}>
                  <img src={rpsGame} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          )}
          <div>
            {fullstackModal && (
              <Modal closeModal={closeModal} project={captotal} />
            )}
            {fullstackModal2 && (
              <Modal closeModal={closeModal} project={gamex} />
            )}
            {fullstackModal3 && (
              <Modal closeModal={closeModal} project={deapp} />
            )}
          </div>

          {reactModal && <Modal closeModal={closeModal} project={pagination} />}

          {reactModal3 && <Modal closeModal={closeModal} project={counter} />}

          {vanillaModal && <Modal closeModal={closeModal} project={redactr} />}
          {vanillaModal2 && (
            <Modal closeModal={closeModal} project={passwordGenerator} />
          )}
          {vanillaModal4 && <Modal closeModal={closeModal} project={rps} />}

        </section>
      </section>
    );
  }
  
  export default Project;