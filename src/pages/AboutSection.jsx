import React, { useEffect, useState, useRef } from "react";
import PresentationJustícia from "../assets/img/Justicia.pdf";
import PresentationSkolstvo from "../assets/img/Skolstvo.pdf";
import PresentationZdravotníctvo from "../assets/img/Zdravotnictvo.pdf";
import Hands from "../assets/img/hands.png";
import History from "../assets/img/history.png";
import PeopleVideo from "../assets/video/about-us-final.mp4";
import "../assets/css/about-us.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers.js";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();
  const videoRef = useRef(null);

  const openPdfInNewTab = (pdfFilePath) => {
    window.open(pdfFilePath, "_blank");
  };

  useEffect(() => {
    const initApp = async () => {
      showLoader();

      await new Promise((resolve) => setTimeout(resolve, 500));

      i18n.changeLanguage(localStorage.getItem("lang"));
      let lang = isLangSk();
      setLang(lang)

      hideLoader();
    };




    setTimeout(() => {
      const playVideo = () => {
        if (videoRef.current) {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => { })
              .catch(() => {
                videoRef.current.controls = true;
              });
          }

          playPromise.catch((err) => {
            if (err.name === 'NotAllowedError') {
              videoRef.current.muted = true;
              videoRef.current.play();
            }
          })
        }
      };

      playVideo();
    }, 500);
    initApp();
  }, []);

  return (
    <div style={{backgroundColor: "#0c141b"}}>
      <Helmet>
        <title>Strana Spravodlivosť | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta
          name="description"
          content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
        ></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/about`}></link>
      </Helmet>
      <div className="container" style={{ marginTop: "120px", marginBottom: "5%", textAlign: "justify", minHeight: "70vh" }}>
        <div className="row">
          <h1 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('about.heading') : "O nás"}</h1>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            {!lang ? t('about.text2') : "Naša strana bola založená s jasným cieľom - priniesť spravodlivosť, transparentnosť a inováciu do slovenskej politiky. Vážime si hodnoty demokracie, slobody a rovnosti, a veríme, že spoločným úsilím môžeme vytvoriť lepšiu budúcnosť pre každého obyvateľa Slovenska."}
          </p>

          <h3
            style={{
              lineHeight: "2",
              fontSize: "20px",
            }}>
            {!lang ? t('about.text3') : "Naša vízia: Chceme Slovensko, kde:"}
          </h3>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            ·   {!lang ? t('about.text4') : "Každý má rovnakú príležitosť dosiahnuť svoj potenciál bez ohľadu na pôvod, vzdelanie či sociálny status."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            ·   {!lang ? t('about.text5') : "Verejné financie sú spravodlivo a efektívne rozdistribuované."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            ·   {!lang ? t('about.text6') : "Vzdelávanie, šport, veda a výskum sú kľúčovými piliermi spoločnosti."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            ·  {!lang ? t('about.text7') : "Technológia a umelá inteligencia sú využívané na zlepšenie života občanov a na dosiahnutie udržateľného rastu."}
          </p>
          <h2
            style={{
              lineHeight: "2",
              fontSize: "20px",
            }}>
            {!lang ? t('about.text8') : "Naše hodnoty:"}
          </h2>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            1. <span style={{ fontWeight: "bold", textDecoration: "underline" }}> {!lang ? t('about.text9before') : "Spravodlivosť"}</span>
            {!lang ? t('about.text9') : ": Všetko, čo robíme, sa riadi etickými a spravodlivými princípmi."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            2. <span style={{ fontWeight: "bold", textDecoration: "underline" }}> {!lang ? t('about.text11before') : "Transparentnosť"}</span>
            {!lang ? t('about.text11') : ": Veríme v otvorenosť a čestnosť vo všetkých našich činoch."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            3. <span style={{ fontWeight: "bold", textDecoration: "underline" }}> {!lang ? t('about.text12before') : "Inovácia"}</span>
            {!lang ? t('about.text12') : ": Nebojíme sa nových nápadov a vítame pokrok v prospech spoločnosti."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            4. <span style={{ fontWeight: "bold", textDecoration: "underline" }}> {!lang ? t('about.text13before') : "Spolupráca"}</span>
            {!lang ? t('about.text13') : ": Vážime si názory a podporu každého jednotlivca a spolupracujeme so všetkými vrstvami spoločnosti na dosiahnutie spoločných cieľov."}
          </p>
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0 20px 0" }}>
            <img src={Hands} style={{ width: "50%", marginBottom: "35px" }} className="hands-img" alt="Hands" />
          </div>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            {!lang ? t('about.text14') : "Pokrok sa neodlučiteľne spája s ľudskou históriou – od objavenia ohňa, cez začiatky poľnohospodárstva, vzniku písma až po digitálnu revolúciu. Odráža našu trvalú túžbu po poznávaní, inovácii a adaptácii."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            {!lang ? t('about.text15') : "AI nie je len technologickým nástrojom; je to odkaz našej schopnosti vytvoriť systémy, ktoré môžu myslieť, učiť sa a rásť spôsobmi, ktoré sme si predtým ani nedokázali predstaviť. AI nám môže pomôcť riešiť niektoré z najzložitejších problémov našej doby, od zmeny klímy po medicínske výzvy."}
          </p>
          <p
            style={{
              lineHeight: "2",
              fontSize: "18px",
            }}>
            {!lang ? t('about.text16') : "Naše cesty pokroku nám ukazujú, že s každou novou inováciou prichádzajú nové možnosti a perspektívy. Umelá inteligencia je nielen odrazom našich technologických úspechov, ale aj svedectvom o našej nekonečnej túžbe po rozšírených hraníc ľudského poznania a schopností. Pozývame vás, aby ste boli súčasťou tejto vzrušujúcej éry, keď spoločne objavujeme a tvarujeme budúcnosť vo svete, kde možnosti sú nekonečné."}
          </p>
        </div>
      </div>

    </div>


  );
};

export default AboutSection;
