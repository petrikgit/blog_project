import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaRegCopyright,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isLangSk } from '../assets/js/helpers'

const Footer = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();

  useEffect(() => {
    let lang = isLangSk();
    setLang(lang)
    i18n.changeLanguage(localStorage.getItem("lang"))
  }, []);

  const navLinks = [
    { to: "/ochrana", label: `${!lang ? t('footer.privacy') : "Ochrana osobných údajov"}` },
    { to: "/povinne-info", label: `${!lang ? t('footer.mandatory') : "Povinne zverejňované informácie"}` },
  ];

  return (
    <footer className="footer-39201 ">
      <div className="container" style={{ paddingBottom: "20px" }}>
        <div className="row align-items-center" style={{ padding: "55px 0 0 0" }}>
          <div className="col-md-4" style={{ display: "flex", alignItems: "left", justifyContent: "center", textAlign: "left" }}>
            <div >
              <div className="row" style={{ marginBottom: "35px", padding: "0 15px 0 15px" }}>
                <div className="row">
                  <h2 id="inpossible-header-id">
                    {!lang ? t("contact.heading") : "Kontaktujte nás"}
                  </h2>
                </div>
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i
                        className="fas fa-map-marker-alt fa-lg"
                        style={{ color: "#ffff" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-10" style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                    <p style={{ margin: 0 }}>
                      Tomášikova 3/A, 821 01 Bratislava-Ružinov
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i
                        className="fas fa-phone fa-lg"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-10" style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                    <p style={{ margin: 0 }}>+421 901 708 682</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i
                        className="fas fa-envelope fa-lg"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-10" style={{ display: "flex", justifyContent: "left", alignItems: "center" }}>
                    <p style={{ margin: 0 }}>
                      spravodlivost.politicka.strana@gmail.com{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer_main_3" className="col-md-6" style={{ display: "flex", justifyContent: "right", textAlign: "right", alignSelf: "flex-end", marginBottom: "9px" }}>
            <ul id="footer_list" style={{ listStyle: "none", padding: "0", color: "#9d9d9d", display: "flex", marginBottom: "35px" }}>
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item" style={{ color: "#9d9d9d", margin: "0 10px" }}>
                  <NavLink to={link.to} target={link.target}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center" style={{alignSelf: "flex-end", marginBottom: "18px"}}>
            <ul className="social list-unstyled">
              <li>
                <a
                  href="https://www.instagram.com/strana_spravodlivost/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/stranaspravodlivost/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="social-icon" />
                </a>
              </li>
              {/* <li>
      <a
        href="https://www.youtube.com/channel/UC0LwtFRIqCvIBQgUVDuAafg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="social-icon" />
      </a>
    </li> */}
              <li>
                <a
                  href="https://twitter.com/Spravodliv85191?t=ohFzyeszu1jZ83U6hmZiag&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="social-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@spravodlivost_sk?lang=cs-CZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12" style={{ textAlign: "center" }}>
            <div className=" mt-5" />
            <hr></hr>
            <p style={{ marginBottom: "0" }}>
              <small style={{ cursor: "default", userSelect: "none" }}>
                {!lang ? t('footer.stranaSpravodlivost') : "Strana Spravodlivosť"} <FaRegCopyright />{" "}
                2023 <span id="footer_main_2">{!lang ? t('footer.allRights') : "Všetky práva vyhradené."}</span>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
