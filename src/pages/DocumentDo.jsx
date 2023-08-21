import React, { useState, useEffect } from "react";
import Table1 from "../assets/img/table1.png";
import Table2 from "../assets/img/table2.png";
import Table3 from "../assets/img/table3.png";
import "../assets/css/mandatory-doc.css";
import DocFirst from "../assets/img/DocFirst-1.png";
import DocSecond from "../assets/img/DocSecond-1.png";
import { Helmet } from 'react-helmet-async'
import { translateContent } from '../App.js'
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { useTranslation } from "react-i18next";

const DocumentDoComponent = () => {
  const [displayDoc, setDisplayDoc] = useState(null);
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();

  const handleClick = (image) => {
    if (displayDoc === image) {
      setDisplayDoc(null);
    } else {
      setDisplayDoc(image);
    }
  };

  useEffect(() => {
    showLoader();
    i18n.changeLanguage(localStorage.getItem("lang"))
    let lang = isLangSk();
    setLang(lang)
    setTimeout(hideLoader, 500)

  }, [])

  return (
    <div style={{marginTop: "3%", marginTop: "120px", backgroundColor: "#0c141b" }}>
      <div className="container">
        <div className="doc-do-container">
          <Helmet>
            <title>Povinne zverejňované informácie | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
            <meta name="description" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
            <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
            <link rel="canonical" href={`/povinne-info/document-do`}></link>
          </Helmet>
          <h2 id="title-1" style={{color: "rgb(182, 182, 182)"}}className="doc-do-title">
            {!lang ? t('mandatoryTo.heading1') : "Povinne zverejňované informácie do 1.5.2023"}
          </h2>
          <p id="title-2">
            {!lang ? t('mandatoryTo.text1') : "Informácia zverejnená podľa § 22 ods. 5 zákona č. 85/2005 Z.z. o politických stranách a politických hnutiach v znení neskorších právnych predpisov:"}
          </p>
          <div>
            <img className="table1-img" src={Table1} style={{maxWidth: "899px", paddingBottom: "15px"}}alt="Table2022" />
          </div>
          <div>
            <img className="table2-img" src={Table2} style={{maxWidth: "899px", paddingBottom: "15px"}}alt="Table2021" />
          </div>
          <div>
            <img className="table3-img" src={Table3} style={{maxWidth: "899px", paddingBottom: "15px"}}alt="Table2020" />
          </div>
          <div id="div-1">
            <p className="doc-text">
              {!lang ? t('mandatoryTo.text2') : "Informácia zverejnená podľa § 22 ods. 5 zákona č. 85/2005 Z.z. o politických stranách a politických hnutiach v znení neskorších právnych predpisov:"}

            </p>
            <p>
              {!lang ? t('mandatoryTo.text3') : "1. politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916"}
              {" "}
              <b>{!lang ? t('mandatoryTo.text4') : "neprijala v kalendárnom roku 2019"}</b>
              {!lang ? t('mandatoryTo.text5') : "príspevky od žiadnych osôb, ktoré by prispeli na jej činnosť"}
              <b> {!lang ? t('mandatoryTo.text6') : "členským príspevkom"}</b>
              {!lang ? t('mandatoryTo.text7') : ", ktorých suma je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia;"}
            </p>
            <p>
              {!lang ? t('mandatoryTo.text8') : "politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916"}
              {" "}
              <b>{!lang ? t('mandatoryTo.text9') : "neprijala v kalendárnom roku 2019"}</b>
              {!lang ? t('mandatoryTo.text10') : "príspevky od žiadnych osôb, ktoré by prispeli na jej činnosť"}
              {" "}
              <b>{!lang ? t('mandatoryTo.text11') : "nepeňažným darom"}</b>
              {!lang ? t('mandatoryTo.text12') : ", ktorých suma je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia;"}

            </p>
            <p>
              {!lang ? t('mandatoryTo.text13') : "politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916"}
              {" "}
              <b>{!lang ? t('mandatoryTo.text14') : "prijala v kalendárnom roku 2019"}</b>
              {!lang ? t('mandatoryTo.text15') : "príspevky od nižšie uvedených osôb, ktoré prispeli na jej činnosť"}
              <b>{!lang ? t('mandatoryTo.text16') : "peňažným darom"}</b>
              {!lang ? t('mandatoryTo.text17') : "politická strana 99%-občiansky hlktorých suma je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia:as, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916"}

            </p>
          </div>
          <div id="div-2">
            <p className="doc-text">
              {!lang ? t('mandatoryTo.text18') : "Ing. Pavel Weiss, Vysoká 7116/16, 811 06 Bratislava – Staré Mesto, výška peňažného daru: 5.000 eur"}
              <br />
              {!lang ? t('mandatoryTo.text19') : "Ing. JUDr. Soňa Snopková, Anízova 20409/25, 821 04 Bratislava – Vrakuňa, výška peňažného daru: 3.000 eur"}
              <br /> {!lang ? t('mandatoryTo.text20') : "RNDr. Ferdinand Búci, Hrobákova 9, 851 02 Bratislava, výška peňažného daru: 3.000 eur"}
              <br /> {!lang ? t('mandatoryTo.text21') : "Ing. Martin Halás, Baltská 33, 821 07 Bratislava, výška peňažného daru: 3.000 eur"}
              <br /> {!lang ? t('mandatoryTo.text22') : "JUDr. Ester Tvrdoň Flóra, Bratislavská 53/31, 900 21 Svätý Jur, výška peňažného daru: 3.000 eur"}
              <br /> {!lang ? t('mandatoryTo.text23') : "Empire Services s.r.o., Trnavská 6/c, 821 08 Bratislava, IČO: 35 835 346, výška peňažného daru: 2.000 eur."}
              <br />
            </p>
            <p>
              {!lang ? t('mandatoryTo.text24') : "4. politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916 prijala v kalendárnom roku 2019 iné bezodplatné plnenie, ktorého hodnota je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia od Mgr. Ivana Weissa, Mikulášska 7015/25, 811 01 Bratislava vo výške 8.031 eur (hodnota bezodplatného plnenia) ako hodnotu obvyklého úroku pri bezúročnej pôžičke (predmet bezodplatného plnenia)."}
              <br />{!lang ? t('mandatoryTo.text25') : "Informácia zverejnená: 18.3.2020"}
            </p>
          </div>
          <div id="div-3">
            <p className="doc-text">
              {!lang ? t('mandatoryTo.text26') : "1. Informácia zverejnená podľa § 22 ods. 5 zákona č. 85/2005 Z.z. o politických stranách a politických hnutiach v znení neskorších právnych predpisov:"}

            </p>
            <p>
              {!lang ? t('mandatoryTo.text27') : "a.) politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916 neprijala v kalendárnom roku 2018 príspevky od žiadnych osôb, ktoré by prispeli na jej činnosť peňažným darom alebo členským príspevkom, ktorých suma je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia."}

            </p>
            <p>
              {!lang ? t('mandatoryTo.text28') : "a.) politická strana 99%-občiansky hlas, b.) politická strana 99%-občiansky hlas, Klariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916 prijala v kalendárnom roku 2018 iné bezodplatné plnenie, ktorého hodnota je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatiaKlariská 330/1, 811 03 Bratislava, IČO: 42257441, zapísaná registri politických strán vedenom MV SR dňa 06.12.2011 pod č. OVVS 3 – 2011/029916 neprijala v kalendárnom roku 2018 príspevky od žiadnych osôb, ktoré by prispeli na jej činnosť peňažným darom alebo členským príspevkom, ktorých suma je vyššia ako dvojnásobok minimálnej mzdy zamestnanca odmeňovaného mesačnou mzdou platnej v čase ich prijatia."}
              {" "}
              <b>
                {!lang ? t('mandatoryTo.text29') : "od Mgr. Ivana Weissa, Mikulášska 7015/25, 811 01 Bratislava vo výške 8031 eur (hodnota bezodplatného plnenia) ako hodnotu obvyklého úroku pri bezúročnej pôžičke (predmet bezodplatného plnenia)."}

              </b>
              <p>
                {!lang ? t('mandatoryTo.text30') : "Informácia zverejnená: 29.3.2019"}</p>
            </p>
          </div>

          <p className="doc-text">
            {!lang ? t('mandatoryTo.text31') : "2. Správa o prostriedkoch použitých na predvolebnú kampaň"}

          </p>
          <div className="doc-btns">
            <button className="doc-btn" onClick={() => handleClick(DocFirst)}>
              <span id="btn-1">
                {!lang ? t('mandatoryTo.text32') : "Správa o prostriedkoch použitých na predvolebnú kampaň – voľby do orgánov samosprávy obcí 2018"}
              </span>
            </button>
            <button className="doc-btn" onClick={() => handleClick(DocSecond)}>
              <span id="btn-2">
                {!lang ? t('mandatoryTo.text33') : "Správa o prostriedkoch vynaložený na volebnú kampaň politickou stranou pre voľby do orgánov samosprávy v roku 2022"}
              </span>
            </button>
            {displayDoc && (
              <div>
                <img className="image-container" src={displayDoc} alt="Document" />
              </div>
            )}
          </div>

          <div id="div-4">
            <p className="doc-text">
              {!lang ? t('mandatoryTo.docText.text1') : "3. Informácia o Zozname darcov na základe ustanovenia § 23 ods. 4 zákona NR SR č. 85/2005 Z. z. o politických stranách a politických hnutiach v znení neskorších predpisov:"}
              
            </p>
            <p>
            {!lang ? t('mandatoryTo.docText.text2') : "V I. štvrťroku 2016 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text">{!lang ? t('mandatoryTo.docText.text3') : "Informácia zverejnená: 30.4.2016"} </p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text4') : "V II. štvrťroku 2016 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text">{!lang ? t('mandatoryTo.docText.text5') : "Informácia zverejnená: 30.7.2016"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text6') : "V III. štvrťroku 2016 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text7') : "Informácia zverejnená: 30.10.2016"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text8') : "V IV. štvrťroku 2016 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text9') : "Informácia zverejnená: 26.1.2017"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text10') : "V I. štvrťroku 2017 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
             
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text11') : "Informácia zverejnená: 28.4.2017"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text12') : "V II. štvrťroku 2017 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text13') : "Informácia zverejnená: 27.7.2017"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text14') : "V III. štvrťroku 2017 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              {" "}
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text15') : "Informácia zverejnená: 26.10.2017"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text16') : "V IV. štvrťroku 2017 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text17') : "Informácia zverejnená: 26.01.2018"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text18') : "V I. štvrťroku 2018 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text19') : "Informácia zverejnená: 25.04.2018"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text20') : "V II. štvrťroku 2018 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
              {" "}
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text21') : "Informácia zverejnená: 25.07.2018"}</p>
            </p>
            <p>{!lang ? t('mandatoryTo.docText.text22') : "V III. štvrťroku 2018 politická strana 99% – občiansky hlas neprijala dar a ani neúčtovala o prijatom dare."}
             {" "}
              <p className="cursive-text"> {!lang ? t('mandatoryTo.docText.text23') : "Informácia zverejnená: 29.10.2018"}</p>
            </p>
            <p> {!lang ? t('mandatoryTo.docText.text24') : "Posledná aktualizácia zoznamu darcov: 29.10.2018"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDoComponent;
