import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/header.css";
import {
  queryGet,
  todaysDate,
  todaysNameday,
  isLangSk,
} from "../assets/js/helpers.js";
import {
  getLangCategories,
  meniny,
  sk,
  uk,
  en,
  pl,
  cs,
  hu,
} from "../utils/APIRoutes";
import { showLoader } from "../assets/js/helpers.js";
import ukFlag from "../assets/img/flags/gb.svg";
import czFlag from "../assets/img/flags/cz.svg";
import huFlag from "../assets/img/flags/hu.svg";
import plFlag from "../assets/img/flags/pl.svg";
import skFlag from "../assets/img/flags/sk.svg";
import uaFlag from "../assets/img/flags/ua.svg";
import TransparentLogo from "../assets/img/transparent_logo_white_2.svg";
import SochaLogo from "../assets/img/logo_socha_white.png";
import { WiDayRainWind } from "react-icons/wi";
import { FaBars } from "react-icons/fa";
import "../assets/css/dashboard.css";
import "../assets/css/index.css";
import { useTranslation } from "react-i18next";
import Home from "../pages/Home";

function Header() {
  const [categories, setCategories] = useState(null);
  const [date, setDate] = useState(null);
  const [nameday, setNameDay] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [city, setCity] = useState("");
  const [flag, setFlag] = useState("");
  const [t, i18n] = useTranslation();
  const [langCheck, setLang] = useState();
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [iDropDownElectionOpen, setiDropDownElectionOpen] = useState(false);

  const liRef = useRef(null);

  const change = (option) => {
    localStorage.setItem("lang", option);
    window.location.reload();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (liRef.current && !liRef.current.contains(event.target)) {
        setiDropDownElectionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  const handleElectionClick = () => {
    setiDropDownElectionOpen((prevState) => !prevState);
  };

  const imgRef = useRef(null);

  const handleFlagClick = () => {
    setIsFlagOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (imgRef.current && !imgRef.current.contains(event.target)) {
        setIsFlagOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const loadData = async () => {
      let lsLang = localStorage.getItem("lang");
      let weather;
      let lang = isLangSk();

      i18n.changeLanguage(lsLang);

      let categories = await queryGet(
        `${getLangCategories}?language=${lsLang ? lsLang : "sk"}`
      );
      console.log(categories, lsLang);
      let nameday = await queryGet(meniny);
      if (lsLang === "sk") {
        setCity("Bratislava");
        setFlag(skFlag);
        weather = await queryGet(sk);
      } else if (lsLang === "uk") {
        setCity("Київ");
        setFlag(uaFlag);
        weather = await queryGet(uk);
      } else if (lsLang === "en") {
        setCity("London");
        setFlag(ukFlag);
        weather = await queryGet(en);
      } else if (lsLang === "pl") {
        setCity("Warszawa");
        setFlag(plFlag);
        weather = await queryGet(pl);
      } else if (lsLang === "hu") {
        setCity("Budapest");
        setFlag(huFlag);
        weather = await queryGet(hu);
      } else if (lsLang === "cs") {
        setCity("Praha");
        setFlag(czFlag);
        weather = await queryGet(cs);
      } else {
        setCity("Bratislava");
        setFlag(skFlag);
        weather = await queryGet(sk);
      }

      setWeather(
        weather.current_weather.temperature +
        weather.hourly_units.temperature_2m
      );
      setLang(lang);
      setCategories(categories);
      setDate(todaysDate(localStorage.getItem("lang")));
      setNameDay(todaysNameday(nameday[0]));
    };

    loadData();

    const handleResize = () => {
      const isMobile = window.innerWidth <= 992;
      setIsMobileView(isMobile);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const lang = localStorage.getItem("lang") || "";

  const navLinks = [
    { to: "/blog", label: `${!langCheck ? t("header.blog") : "Blog"}` },
    { to: "/about", label: `${!langCheck ? t("header.aboutUs") : "O nás"}` },
  ];

  const navLinksElections = [
    {
      to: "/program",
      label: `${!langCheck ? t("header.electoralProgram") : "Volebný program"}`,
    },
    {
      to: "/school",
      label: `${!langCheck ? t("header.schoolUI") : "AI v školstve"}`,
    },
    {
      to: "/healthcare",
      label: `${!langCheck ? t("header.healthcareUI") : "AI v zdravotníctve"}`,
    },
    {
      to: "/sport",
      label: `${!langCheck ? t("header.sportUI") : "AI v športe"}`,
    },
    {
      to: "/finance",
      label: `${!langCheck ? t("header.financeUI") : "AI vo verejných financiách"}`,
    },
  ];

  const categoriesSlovak = {
    Technology: "Technológie",
    Technológie: "Technológie",
    Technologia: "Technológie",
    Technologie: "Technológie",
    Технологія: "Technológie",
    Technológia: "Technológie",
    "Research & Development": "Výskum a vývoj",
    "Výskum a vývoj": "Výskum a vývoj",
    "Badania i rozwój": "Výskum a vývoj",
    "Výzkum a vývoj": "Výskum a vývoj",
    "Дослідження та розробка": "Výskum a vývoj",
    "Kutatás és fejlesztés": "Výskum a vývoj",
    "Artificial intelligence": "A.I.",
    "Umelá inteligencia": "A.I.",
    "Sztuczna inteligencja": "A.I.",
    "Umělá inteligence": "A.I.",
    "Штучний інтелект": "A.I.",
    "Mesterséges intelligencia": "A.I.",
  };

  return (
    <header id="header" style={{ position: "absolute", zIndex: "9999", width: "100%", display: "none", right: isMobileView ? "0" : "18.5px" }}>
      <div className="header-top container text-center" id="header-part-1">
        <div className="row">
          <div
            className="col-md-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isMobileView ? "" : ""}
          </div>
          <div
            className="col-md-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isMobileView ? (
              ""
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="logo-container"></div>
      </div>
      {isMobileView ? (
        <div className="container header-middle-container">
          <nav
            className="nav navbar-expand-lg navbar-dark"
            style={{ height: "50px" }}
          >
            <div
              className="navbar-toggler-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "0 !important",
              }}
            >
              <div
                className="navbar-toggler"
                style={{ border: 0 }}
                onClick={handleMenuToggle}
              >
                <FaBars />
              </div>
              <div className="nav-item-weather">
                {
                  <WiDayRainWind
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                }{" "}
                <a
                  style={{
                    display: "inline-block",
                    maxWidth: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {city} | {weather}
                </a>
              </div>
            </div>
            {isMenuOpen && (
              <div
                className="overlay"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              ></div>
            )}
            <ul
              className={`navbar-nav ${isMenuOpen ? "open" : ""}`}
              id="header_main"
            >
              <li>
                <NavLink
                  to="/" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={TransparentLogo}
                    alt="TransparentLogo"
                    style={{ display: "block", width: "150px" }}
                  />
                </NavLink>
              </li>
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to}
                    target={link.target}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <hr style={{ color: "#e7e6e7" }}></hr>
              <div style={{ textAlign: "center", color: "white" }}>

                {navLinksElections.map((link) => (
                  <li>
                    <NavLink
                      to={link.to}
                      target={link.target}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </div>


            </ul>
          </nav>
        </div>
      ) : (
        <div className="header-middle-row">
          <div
            className="container header-middle-container"
            style={{ height: "100%", padding: "15px" }}
          >
            <nav
              className="nav navbar-expand-lg navbar-dark"
              style={{ height: "100%" }}
            >
              <div className="container">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-6" style={{ height: "100%" }}>
                    <div className="image-container" style={{ padding: "6px" }}>
                      <NavLink
                        to="/" style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={TransparentLogo}
                          alt="TransparentLogo"
                          style={{ display: "block", width: "200px" }}
                        />
                      </NavLink>
                    </div>

                  </div>
                  <div
                    className="col-md-6"
                    style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
                  >
                    <ul className="navbar-nav" id="header_main">
                      {navLinks.map((link) => (
                        <li
                          key={link.to}
                          style={{ cursor: "pointer" }}
                          className={`nav-item ${link.label === "O nás" ? "one-line" : ""}`}
                        >
                          <NavLink to={link.to} target={link.target} style={{ padding: '0 20px 0 20px' }}>
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                      <li
                        style={{ cursor: "pointer" }}
                        className="nav-item"
                        ref={liRef}
                        onMouseDown={handleElectionClick}
                      ><span style={{ color: "#e7e6e7", fontSize: "17px", padding: '0 20px 0 20px' }}>{!langCheck ? t("header.elections") : "Voľby 2023"}</span></li>
                    </ul>
                    {iDropDownElectionOpen && (
                      <ul className="custom-dropdown"
                        style={{
                          listStyle: "none",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "#111a22",
                          padding: "5px",
                          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",

                        }} >
                        {navLinksElections.map((link) => (
                          <li
                            key={link.to}
                            className={`nav-item ${link.label === "O nás" ? "one-line" : ""}`}
                            style={{ marginRight: "10px", }}
                          >
                            <NavLink to={link.to}
                              onMouseDown={(e) => {
                                e.stopPropagation();
                              }}
                              onClick={() => setiDropDownElectionOpen(false)}
                              style={{ fontSize: "17px", padding: "0 10px 5px 10px" }} target={link.target}>
                              {link.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    <img
                      src={flag}
                      style={{ height: "16px", marginLeft: "5px", cursor: "pointer" }}
                      onClick={handleFlagClick}
                      ref={imgRef}
                    />
                    {isFlagOpen && (
                      <ul
                        className="custom-dropdown"
                        style={{
                          listStyle: "none",
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "#111a22",
                          padding: "5px",
                          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <li
                          value="sk"
                          checked={lang === "sk"}
                          onMouseDown={(e) => { e.stopPropagation(); change("sk"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >
                          Slovenčina
                        </li>
                        <li
                          value="en"
                          checked={lang === "en"}
                          onMouseDown={(e) => { e.stopPropagation(); change("en"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >
                          English
                        </li>
                        <li
                          value="pl"
                          checked={lang === "pl"}
                          onMouseDown={(e) => { e.stopPropagation(); change("pl"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >

                          Polski
                        </li>
                        <li
                          value="cs"
                          checked={lang === "cs"}
                          onMouseDown={(e) => { e.stopPropagation(); change("cs"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >
                          Čeština
                        </li>
                        <li
                          value="uk"
                          checked={lang === "uk"}
                          onMouseDown={(e) => { e.stopPropagation(); change("uk"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >
                          Україна
                        </li>
                        <li
                          value="hu"
                          checked={lang === "hu"}
                          onMouseDown={(e) => { e.stopPropagation(); change("hu"); }}
                          style={{ cursor: 'pointer', padding: "0 10px 5px 10px" }}
                        >
                          Magyar
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
