import React, { useEffect, useState, useRef } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "../assets/css/contacts.css";
import "../assets/css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gif from "../assets/img/final-home-video.gif";
import BgVideo from "../assets/img/backgorund-image.webm";
import Person1 from "../assets/video/Person1.mp4";
import Person2 from "../assets/video/Person2.mp4";
import Person3 from "../assets/video/Person3.mp4";
import Hero1 from "../assets/img/hero_1.png";
import Hero2 from "../assets/img/hero_2.png";
import Hero3 from "../assets/img/hero_3.png";
import Person4 from "../assets/video/Person4.mp4";
import AboutUs from "../assets/video/about-us-final.mp4";
import Zdrav from "../assets/img/zdrav.png";
import Skolstvo from "../assets/img/skolstv.png";
import Finance from "../assets/img/financie.png";
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";

import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers.js";

const Home = ({ google }) => {
  const videoRefs = useRef([]);
  const [t, i18n] = useTranslation();
  const videoRef = useRef(null);
  // const [mapStyles, setMapStyles] = useState({});
  const [langCheck, setLang] = useState();
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);
  const [collapse6, setCollapse6] = useState(false);
  const [collapse7, setCollapse7] = useState(false);
  const [collapse8, setCollapse8] = useState(false);
  const [collapse9, setCollapse9] = useState(false);
  const [collapse10, setCollapse10] = useState(false);
  const [collapse11, setCollapse11] = useState(false);
  const [collapse12, setCollapse12] = useState(false);
  const [collapse13, setCollapse13] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);
  const toggleCollapse4 = () => setCollapse4(!collapse4);
  const toggleCollapse5 = () => setCollapse5(!collapse5);
  const toggleCollapse6 = () => setCollapse6(!collapse6);
  const toggleCollapse7 = () => setCollapse7(!collapse7);
  const toggleCollapse8 = () => setCollapse8(!collapse8);
  const toggleCollapse9 = () => setCollapse9(!collapse9);
  const toggleCollapse10 = () => setCollapse10(!collapse10);
  const toggleCollapse11 = () => setCollapse11(!collapse11);
  const toggleCollapse12 = () => setCollapse12(!collapse12);
  const toggleCollapse13 = () => setCollapse13(!collapse13);

  const sections = [
    {
      video: AboutUs,
    },
    {
      video: Person1,
    },
    {
      video: Person3,
    },
    {
      video: Person4,
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginRight: "20rem",
          marginTop: "6.25rem",
        }}
        onClick={onClick}
      />
    );
  }


  useEffect(() => {
    const initApp = async () => {
      showLoader();

      await new Promise((resolve) => setTimeout(resolve, 700));

      i18n.changeLanguage(localStorage.getItem("lang"));
      document.querySelector("header").style.display = "block";

      hideLoader();
    };

    initApp();
  }, []);

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  let lang = isLangSk();

  const pauseVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mapStyles = {
    width: "80%",
    height: "80%",
    margin: "20px",
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121E2A",
      }}
    >
      <div
        id="main"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <video src={BgVideo} style={{ position: "absolute", height: "100vh", opacity: "0.3", width: "100%", objectFit: "cover" }} loop autoPlay muted ></video>
        <div
          className="home-container"
          style={{
            opacity: 1,
            zIndex: "9987",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            className="home-title animate"
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "#5AC7D4",
              fontFamily: "Titillium Web",
              textAlign: "left",
            }}
          >

            {!lang ? t('home.heading') : "SPRAVODLIVOSŤ"}
          </h1>
          <div className="home-text" style={{ maxWidth: "800px" }}>
            <p
              className="typewriter-text animate"
              style={{
                color: "rgb(252 252 252)",
                textAlign: "justify",
                lineHeight: "1.5",
                fontSize: "50px !important"
              }}
            >
              {!lang ? t('home.text') : "Vitajte na stránke politickej strany Spravodlivosť - prvej politickej strany na Slovensku, ktorá využíva umelú inteligenciu na dosiahnutie pokroku a inovácií. Sme presvedčení, že pokrok nie je možné zastaviť, a preto chceme byť pripravení na novú éru. Umelá inteligencia môže byť silným nástrojom na zlepšenie našej spoločnosti pokiaľ budeme pripravení. Pridajte sa k Nám."}
            </p>
          </div>
        </div>
      </div>

      <div
        className="home-content-container"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px 5%",
          boxSizing: "border-box",
          marginBottom: "30px"
        }}
      >
        <div
          className="home-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "20px",
          }}
        >
          <img
            className="home-content-img"
            src={Hero1}
            alt="Zdravotnictvo"
            style={{
              marginRight: "340px",
              width: "500px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "5%"
            }}
          />{" "}
          {/* Increased margin-right */}
          <div style={{ maxWidth: "500px" }}>
            <h2 id="title_3" className="home-content-title" style={{ fontWeight: "bold" }}>
              {!lang ? t("home.AI.heading1") : "Prečo by sa ľudia nemali báť AI."}
            </h2>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "2",
                fontSize: "18px",

              }}
            >
              {!lang
                ? t("home.AI.text1")
                : "Ľudia by sa nemali báť AI, pretože je to nástroj, ktorý môže priniesť pozitívny vplyv na spoločnosť. AI môže zlepšiť efektivitu, inovácie a riešenie komplexných problémov. Dôležité je však zabezpečiť etické a zodpovedné využitie tejto technológie."}
            </p>
          </div>
        </div>

        <div
          className="home-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginTop: "30px",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <h2 id="title_1" className="home-content-title" style={{ fontWeight: "bold" }}>
              {!lang ? t("home.AI.heading2") : "Čo je to AI?"}
            </h2>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "2",
                fontSize: "18px",
              }}
            >
              {!lang
                ? t("home.AI.text2")
                : "Umelá inteligencia (AI) je technologický koncept, kde stroje a systémy simulujú ľudskú inteligenciu, ako je učenie, rozhodovanie a riešenie problémov. Tieto systémy sa opierajú o algoritmy a dáta na vykonávanie úloh, ktoré by si vyžadovali ľudskú inteligenciu. AI má široký dosah od autonómnych vozidiel po hlasových asistentov a medicínske diagnózy."}
            </p>
          </div>
          <img
            className="home-content-img"
            src={Hero2}
            alt="Zdravotnictvo"
            style={{
              marginLeft: "340px",
              width: "500px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "5%"
            }}
          />
        </div>

        <div
          className="home-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginTop: "30px",
          }}
        >
          <img
            className="home-content-img"
            src={Hero3}
            alt="Zdravotnictvo"
            style={{
              marginRight: "340px",
              marginBot: "15px",
              width: "500px",
              height: "450px",
              objectFit: "cover",
              borderRadius: "5%"
            }}
          />
          <div style={{ maxWidth: "500px" }}>
            <h2 id="title_2" className="home-content-title" style={{ fontWeight: "bold", marginTop: "15px !important" }}>
              {!lang ? t("home.AI.heading3") : "Ako môže AI pomôcť"}
            </h2>
            <p
              style={{
                textAlign: "justify",
                lineHeight: "2",
                fontSize: "18px",
              }}
            >
              {!lang
                ? t("home.AI.text3")
                : "AI môže pomôcť v zlepšovaní presnosti diagnostiky v medicíne prostredníctvom analýzy obrovského množstva pacientskych údajov a identifikácie vzorov. V oblasti verejných financií môže AI analyzovať hospodárske údaje a predpovedať vývoj, čo pomáha pri tvorbe efektívnych fiškálnych politík. V školstve môže AI personalizovať učebné plány a poskytovať učiteľom nástroje na lepšie sledovanie a zlepšovanie výkonnosti študentov."}
            </p>
          </div>
        </div>
      </div>
      {/* services and faq */}
      <div style={{ marginBottom: "25px" }}>
        <div
          className="home-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginTop: "30px",
          }}
        >
          <div className="container">
            <div className="row" style={{ textAlign: "center" }}>
              <h1>{!lang ? t("home.services.heading") : "Verejný sektor a AI"}</h1>
              <section className="section services-section" id="services">
                <div className="container">
                  <div className="row">

                    <div className="col-sm-6 col-lg-4">
                      <div className="feature-box-1">
                        <div class="container-image">
                          <img
                            className="home-content-img"
                            src={Skolstvo}
                            alt="Zdravotnictvo"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <a href="/school" class="centered-text" style={{ textAlign: "center !important", display: "none", fontSize: "20px", fontWeight: "bold" }}>{!lang ? t("home.findOutMore") : "Zistiť viac"}</a>
                        </div>
                        <div className="feature-content">
                          <h3 className="home-content-title" style={{ fontWeight: "bold", marginTop: "15px" }}>
                            {!lang ? t("home.school.heading") : "ŠKOLSTVO"}
                          </h3>
                          <p
                            style={{
                              fontSize: "15px",
                            }}
                          >
                            {!lang
                              ? t("home.school.text")
                              : "AI vie výrazne pomôcť k personalizácii výučby. Inteligentné výučbové systémy môžu adaptovať obsah a tempo výučby na potreby a schopnosti každého študenta, identifikovať oblasti, kde študenti potrebujú zlepšiť svoje schopnosti a poskytnúť učiteľom spätnú väzbu o pokroku študentov."}
                          </p></div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="feature-box-1">
                        <div class="container-image">
                          <img
                            className="home-content-img"
                            src={Finance}
                            alt="Zdravotnictvo"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <a href="/finance" class="centered-text" style={{ textAlign: "center !important", display: "none", fontSize: "20px", fontWeight: "bold" }}>{!lang ? t("home.findOutMore") : "Zistiť viac"}</a>
                        </div>
                        <div className="feature-content">
                          <h3 className="home-content-title" style={{ fontWeight: "bold", marginTop: "15px" }}>
                            {!lang ? t("home.finance.heading") : "VEREJNÉ FINANCIE"}
                          </h3>
                          <p
                            style={{
                              fontSize: "15px",
                            }}
                          >
                            {!lang
                              ? t("home.finance.text")
                              : "AI umožňuje presnejšie predpovedať príjmy a výdavky pre efektívnejšie rozpočtovanie. Podporuje transparentnosť detekciou podvodov a korupcie v transakciách. Napomáha optimalizovať výdavky a alokovať zdroje efektívnejšie. Uvoľňuje úradníkom čas automatizáciou administratívnych úloh. AI tak podporuje efektívnejšie riadenie verejných zdrojov a slúženie občanom."}
                          </p></div>
                      </div>

                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="feature-box-1">
                        <div class="container-image">
                          <img
                            class="home-content-img"
                            src={Zdrav}
                            alt="Zdravotnictvo"
                            style={{ height: "250px", objectFit: "cover" }}
                          />
                          <a href="/healthcare" class="centered-text" style={{ textAlign: "center !important", display: "none", fontSize: "20px", fontWeight: "bold" }}>{!lang ? t("home.findOutMore") : "Zistiť viac"}</a>
                        </div>
                        <div className="feature-content">
                          <h3 className="home-content-title" style={{ fontWeight: "bold", marginTop: "15px" }}>
                            {!lang ? t("home.healthcare.heading") : "ZDRAVOTNÍCTVO"}
                          </h3>
                          <p
                            style={{
                              fontSize: "15px",
                            }}
                          >
                            {!lang
                              ? t("home.healthcare.text")
                              : "AI môže významne prispieť k efektivite a presnosti diagnóz a liečby. Algoritmy strojového učenia môžu napríklad analyzovať obrovské množstvá medicínskych dát, identifikovať vzory, ktoré sú pre ľudské oko neviditeľné a predpovedať vývoj chorôb alebo reakciu na liečbu. AI môže tiež automatizovať administratívne úlohy, čím uvoľní čas lekárom na koncentráciu na pacienta."}
                          </p></div>
                      </div>
                    </div>

                  </div>


                </div>
              </section>
            </div>
          </div>
        </div>
      </div >
      <div style={{ marginBottom: "25px" }}>
        <div
          className="home-content"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            marginTop: "30px",
          }}
        >
          <div className="container">
            <div className="row" style={{ cursor: "pointer !important" }}>
              <p id="questions_id" style={{ textAlign: "center" }}>{!lang ? t("home.anyQuestions") : "Máte otázky?"}</p>
              <h1 style={{ textAlign: "center" }}>{!lang ? t("home.faqTitle") : "Často kladené otázky"}</h1>

              <MDBContainer className="mt-5" style={{ maxWidth: "1000px", backgroundColor: "#111a22", borderRadius: "15px" }}>
                <MDBListGroup>
                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse1} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq1.heading") : "Čo je strana Spravodlivosť?"}</MDBTypography>
                    {/* <p className="mb-1">{!lang ? t("home.faq1.short") : "Priniesť zmenu v politike, sústrediť sa na občanov."}</p> */}
                    <MDBCollapse show={collapse1} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq1.text") : "Strana Spravodlivosť je politická strana, ktorá sa zameriava na pokrok prostredníctvom informovaného rozhodovania, etického využívania umelej inteligencie, transparentnosti a objektivity vo verejnej komunikácii."}
                    </MDBCollapse>
                  </MDBListGroupItem>
                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse2} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq2.heading") : "Čo chcete dosiahnúť?"}</MDBTypography>
                    {/* <p className="mb-1">{!lang ? t("home.faq2.short") : "Analyzuje politické dáta, predvídá udalosti, informuje občanov."}</p> */}

                    <MDBCollapse show={collapse2} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq2.text") : "Chceme dosiahnuť zlepšenie zdravotníctva, školstva a verejných financií, prostredníctvom efektívnych reforiem a optimálnych investícií pre pokrok a lepšiu budúcnosť."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse3} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq3.heading") : "Aký je váš politický program?"}</MDBTypography>
                    {/* <p className="mb-1">{!lang ? t("home.faq3.short") : "Sleduje politiku, odhaľuje fakty, robí informácie prístupné."}</p> */}

                    <MDBCollapse show={collapse3} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq3.text") : "Náš politický program zahŕňa zlepšenia v zdravotníctve, školstve a verejných financiách. Dôraz kladie na transparentnosť, objektivitu a etické využitie umelej inteligencie na informované rozhodovanie pre prosperitu a spravodlivosť."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse4} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq4.heading") : "Čo je hlavným cieľom politickej strany Spravodlivosť?"}</MDBTypography>
                    <MDBCollapse show={collapse4} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq4.text") : "Našim hlavným cieľom je vytvoriť transparentné a efektívne riadené Slovensko s využitím moderných technológií, konkrétne umelej inteligencie (AI), v oblastiach školstva, zdravotníctva, verejných financií a športu."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse5} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq5.heading") : "Prečo sa rozhodujete využívať umelú inteligenciu v rozhodovaní?"}</MDBTypography>

                    <MDBCollapse show={collapse5} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq5.text") : "Umelá inteligencia ponúka rýchlejšie, objektívnejšie a dátovo orientované rozhodovanie. Veríme, že jej využitie nám umožní optimalizovať využitie verejných zdrojov, znižovať plytvanie a podporovať inovácie."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse6} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq6.heading") : "Ako riešite skutočnosť, že umelá inteligencia sa rýchlo vyvíja a môže byť tým pádom ťažko kontrolovateľná?"}</MDBTypography>

                    <MDBCollapse show={collapse6} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq6.text") : "Je pravda, že vývoj v oblasti umelej inteligencie je mimoriadne dynamický. Ako strana sa snažíme byť vždy o krok vpred, aby sme vedeli, ako najlepšie využívať nové technologické možnosti, zároveň však zabezpečovať, že sú v súlade s etickými zásadami a štandardmi. Veľmi si ceníme spoluprácu s expertmi z oblasti AI a vždy radi privítame viac odborníkov, ktorí by chceli s nami spolupracovať na tejto výzve."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse7} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq7.heading") : "Aké sú hlavné výhody využitia umelej inteligencie v oblasti školstva?"}</MDBTypography>
                    <MDBCollapse show={collapse7} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq7.text") : "AI môže pomôcť v personalizácii vzdelávania, identifikácii potrieb študentov, optimalizácii učebných plánov a zlepšení efektívnosti výučby."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse8} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq8.heading") : "Ako môže umelá inteligencia prispieť k zlepšeniu zdravotníctva?"}</MDBTypography>
                    <MDBCollapse show={collapse8} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq8.text") : "Umelá inteligencia môže podporiť diagnostiku chorôb, optimalizovať distribúciu zdravotnej starostlivosti, identifikovať potreby pacientov a zlepšovať výskum a vývoj v oblasti medicíny."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse9} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq9.heading") : "Ako plánujete inovovať oblasť športu s pomocou umelej inteligencie?"}</MDBTypography>
                    <MDBCollapse show={collapse9} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq9.text") : "Plánujeme využívať AI na analýzu výkonov športovcov, optimalizáciu tréningových plánov a zlepšenie organizácie športových podujatí pre občanov."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse10} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq10.heading") : "Ako môže umelá inteligencia pomôcť v správe verejných financií?"}</MDBTypography>
                    <MDBCollapse show={collapse10} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq10.text") : "AI môže identifikovať plytvanie prostriedkami, optimalizovať rozpočtové výdavky, predpovedať finančné trendy a zlepšiť kontrolu nad verejnými zdrojmi."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse11} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq11.heading") : "Ako môžem prispieť alebo sa zapojiť do činnosti strany Spravodlivosť?"}</MDBTypography>
                    <MDBCollapse show={collapse11} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq11.text") : "Radi privítame každého, kto sa chce zapojiť a prispieť k našej misii. Môžete nás kontaktovať prostredníctvom našej webovej stránky alebo sociálnych médií a dozvedieť sa viac o aktuálnych možnostiach spolupráce."}
                    </MDBCollapse>
                  </MDBListGroupItem>

                  <MDBListGroupItem tag="a" href={undefined} onClick={toggleCollapse12} action style={{ backgroundColor: "#141E2A", margin: "10px 0 10px 0", borderColor: "#111a22" }}>
                    <MDBTypography tag="h5" style={{ cursor: "pointer", userSelect: "none" }}>{!lang ? t("home.faq12.heading") : "Máte v pláne spolupracovať s medzinárodnými odborníkmi na AI?"}</MDBTypography>
                    <MDBCollapse show={collapse12} style={{ cursor: "pointer", userSelect: "none" }}>
                      {!lang ? t("home.faq12.text") : "Určite áno. Uvedomujeme si, že umelá inteligencia je globálne pole a radi by sme využili najnovšie poznatky a skúsenosti medzinárodných expertov. Ak ste odborníkom v oblasti AI alebo poznáte niekoho, kto by bol zaujímavý pre našu spoluprácu, neváhajte nás kontaktovať."}
                    </MDBCollapse>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBContainer>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>
          Strana Spravodlivosť | Spravodlivosť | Strana Spravodlivosť |
          Politická strana Spravodlivosť | Voľby 2023
        </title>
        <meta
          name="description"
          content="Strana Spravodlivosť je tvorená tímom odhodlaných ľudí, ktorí veria v rovnosť a spravodlivosť pre všetkých. | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
        ></meta>
        <meta
          name="keywords"
          content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
        />
        <link rel="canonical" href={`/`}></link>
      </Helmet>
    </div >
  );
};

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBd1c6CoECyrmsDnPQvq-KrVvc7Dmsecwc",
// })(Home);

export default Home;
