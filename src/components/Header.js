import artWork from "./images/jupy.png";
import redactrApp from "./images/redARct.png";
import passswordGen from "./images/password-gen.png";
import gameEcommerce from "./images/commerce.png";
import TypingAnimation from "./TypingAnimation";
import SlideUpAnimation from "./SlideUpAnimation";

function Header() {
  return (
    <section className="header">
      <div className="main-section">
        <h4 className="name barlow-font">
          <TypingAnimation text="Joseph George" />
        </h4>
        <h1 className="name barlow-font header-size">
          <TypingAnimation text="FULLSTACK ENGINEER " />
        </h1>
        <SlideUpAnimation>
          <p className="monserrat-font paragraph-size">
            Unleash the power of seamless digital solutions with a Full Stack
            Engineer at the helm of innovation.
          </p>
        </SlideUpAnimation>
        <button>
          <a href="https://drive.google.com/file/d/1elj4Kx6VTc-0s0y0DjGVBhc6uvL09kTV/view?usp=drive_link">
            Resume
          </a>
        </button>
      </div>
      <aside>
        <div className="header-projects">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={redactrApp} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={gameEcommerce} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={passswordGen} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
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
              data-bs-target="#carouselExampleControls"
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
      </aside>
    </section>
  );
}

export default Header;
