import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/mandatory-info.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from 'react-helmet-async'
import { useTranslation } from "react-i18next";

const MandatoryInfoComponent = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();


  useEffect(() => {
    showLoader();
    i18n.changeLanguage(localStorage.getItem("lang"))
    let lang = isLangSk();
    setLang(lang)

    setTimeout(hideLoader, 500)

  }, [])

  return (
    <div style={{ marginTop: "120px", marginBottom: "7%", }}>
      <div className="container">
        <div className="mandatory-info-container" style={{ height: "70vh", backgroundColor: "#0c141b" }}>
          <Helmet>
            <title>Povinne zverejňované informácie | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
            <meta name="description" content="Povinne zverejňované informácie | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
            <link rel="canonical" href={`/povinne-info`}></link>
            <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
          </Helmet>
          <h2 id="title-1" style={{ color: "white"}}>{!lang ? t('mandatory.heading') : "Povinne zverejňované informácie"}</h2>
          <div className="document">
            <span><a className="document-link" href="/povinne-info/document-od">
              {!lang ? t('mandatory.text') : "Povinne zverejňované informácie od 2.5.2023"}

            </a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MandatoryInfoComponent;
