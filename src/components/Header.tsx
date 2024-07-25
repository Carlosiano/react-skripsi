import { useState } from "react";
import {
  logoNav,
  closeOutline,
  personAddOutline,
  arrowForwardOutline,
  menuOutline,
} from "../assets/images";
import { navLinks } from "../assets/js/data";

export default function Header({ scrollY }: { scrollY: number }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <header className={`header ${scrollY > 100 && "active"}`} data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src={logoNav} alt="UTC logo" />
          </a>

          <nav className={`navbar ${isActive ? "active" : ""}`} data-navbar>
            <div className="wrapper">
              <a href="#" className="logo">
                <img src={logoNav} width="162" height="50" alt="UTC logo" />
              </a>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                onClick={() => setActive(!isActive)}
              >
                <img
                  src={closeOutline}
                  alt=""
                  className="ion-icon"
                  aria-hidden="true"
                />
              </button>
            </div>
            <ul className="navbar-list">
              {navLinks.map((item, index) => (
                <li
                  className="navbar-item"
                  key={index}
                  onClick={() => setActive(!isActive)}
                >
                  <a
                    href={`#${item.href}`}
                    className="navbar-link"
                    data-nav-link
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#" className="btn has-before">
              <img
                src={personAddOutline}
                alt=""
                className="ion-icon"
                aria-hidden="true"
              />
              <span className="span">Daftar</span>
            </a>
            <a href="#" className="btn-second has-before">
              <img
                src={arrowForwardOutline}
                alt=""
                className="ion-icon"
                aria-hidden="true"
              />
              <span className="span">Masuk</span>
            </a>

            <button
              className="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={() => setActive(!isActive)}
            >
              <img
                src={menuOutline}
                alt=""
                className="ion-icon"
                aria-hidden="true"
              />
            </button>
          </div>

          <div
            className={`overlay ${isActive ? "active" : ""}`}
            data-nav-toggler
            data-overlay
            onClick={() => setActive(!isActive)}
          ></div>
        </div>
      </header>
    </>
  );
}
