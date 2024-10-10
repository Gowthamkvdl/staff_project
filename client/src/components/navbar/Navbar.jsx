import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const Navbar = () => {
  useEffect(() => {
    const sideParts = document.querySelectorAll(".sidePart");
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      sideParts.forEach((sidePart) => {
        if (window.innerWidth > 768) {
          if (window.scrollY > 80) {
            sidePart.classList.remove("d-md-block");
            sidePart.classList.add("d-none"); // Add 'd-none' class to hide when scrolled down more than 100px
            navbar.classList.remove("justify-content-md-between");
          } else {
            sidePart.classList.add("d-md-block");
            sidePart.classList.remove("d-none"); // Remove 'd-none' to show when scrolled back up
            navbar.classList.add("justify-content-md-between");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          duration: 4000,
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <nav className="navbar container navbar-expand d-flex align-items-center justify-content-md-between justify-content-center bg-body-white">
        <div className="touristBus d-none d-md-block sidePart">
          <h1 className="title-text">SkillStream Academy</h1>
        </div>
        <div className="">
          <div
            className="collapse me-4 pb-0 navbar-collapse box-shadow px-3 rounded-4"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="link" to="/">
                  <a
                    className="nav-link d-flex flex-column align-items-center active"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-light d-md-none mt-1 title-text">
                      home
                    </span>
                    <span className="d-none text-light d-md-block">Home</span>
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="link" to="/search">
                  <a
                    className="nav-link d-flex flex-column align-items-center"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-light d-md-none mt-1 title-text">
                      search
                    </span>
                    <span className="d-none text-light d-md-block">Search</span>
                  </a>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="link" to={"/fav"}>
                  <a
                    className="nav-link d-flex flex-column align-items-center"
                    href="#"
                  >
                    <span class="material-symbols-outlined text-light d-md-none mt-1 title-text">
                      favorite
                    </span>
                    <span className="d-none text-light d-md-block">
                      Favorite
                    </span>
                  </a>
                </Link>
              </li>
              <li className="nav-item d-md-none">
                <Link className="link" to={"/doubt"}>
                  <a className="nav-link" href="#">
                    <span className="material-symbols-outlined text-light d-md-none mt-1 title-text">
                      help
                    </span>
                    <span className="d-none d-md-block">Doubt</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item d-md-none">
                <Link className="link" to={"/Login"}>
                  <a className="nav-link" href="#">
                    <span className="material-symbols-outlined text-light d-md-none mt-1 title-text">
                      person
                    </span>
                    <span className="d-none d-md-block">Login</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="LoginBtn d-none d-md-block sidePart">
          <Link className="link" to={"/Login"}>
            <button className="btn secondary-700 d-flex align-items-center gap-1">
              <span className="material-symbols-outlined text-light">
                person
              </span>
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
