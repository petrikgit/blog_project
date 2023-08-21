import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import TransparentLogo from "../assets/img/logo_socha_blue.png";
import { NavLink } from "react-router-dom";
import '../assets/css/program.css'
import Finance1Img from '../assets/img/finance_1.png'
import Finance2Img from '../assets/img/finance_2.png'
import Finance3Img from '../assets/img/finance_3.png'
import Finance4Img from '../assets/img/finance_4.png'
import { useTranslation } from "react-i18next";

const UIFinance = () => {
    const [t, i18n] = useTranslation()
    const [lang, setLang] = useState();

    useEffect(() => {
        showLoader();
        i18n.changeLanguage(localStorage.getItem("lang"))
        let lang = isLangSk();
        setLang(lang)
        setTimeout(hideLoader, 500);
    }, []);

    return (
        <div style={{backgroundColor: "#0c141b"}}>
            <img class="img-fluid" src={Finance3Img} style={{ width: "100vw", objectFit: "cover", maxHeight: "350px", filter: "blur(0.11rem)" }} ></img>
            <div className="container" style={{ marginTop: "60px", marginBottom: "7%", minHeight: "55vh" }}>
                <div className="info-background">
                    <Helmet>
                        <title>Umelá Inteligencia vo verejných financiách na Slovensku | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                        <meta
                            name="description"
                            content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia vo verejných financiách na Slovensku"
                        ></meta>
                        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia vo verejných financiách na Slovensku" />
                        <link rel="canonical" href={`/finance`}></link>
                    </Helmet>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div id="text-id-1" style={{ textAlign: "justify" }}>
                                    <h2 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left" }}>
                                        {!lang ? t('financeUI.title') : "Umelá inteligencia vo verejných financiách"}
                                    </h2>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text1') : "Vítajte v sekcii, kde sa venujeme revolučnej oblasti umelej inteligencie (AI) a jej potenciálu pri správe verejných financií. Strana Spravodlivosť presadzuje transparentnosť, efektívnosť a lepší život pre všetkých občanov. V tejto sekcii si môžete prečítať, ako nám v tom môže pomôcť AI."}
                                    </p>
                                    <img src={Finance4Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%"  }}></img>
                                    {/* prakticke moznosti */}
                                    <h4 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('financeUI.heading1') : "Praktické možnosti využitia AI:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('financeUI.text2.bold') : "Prediktívna analýza"}</span>
                                        {!lang ? t('financeUI.text2.text') : ": AI môže predpovedať budúce výdavky a príjmy štátneho rozpočtu na základe histórie a aktuálnych trendov, čo nám umožní lepšie plánovanie a alokáciu zdrojov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('financeUI.text3.bold') : "Detekcia podvodov"}</span>
                                        {!lang ? t('financeUI.text3.text') : ": AI môže skenovať a analyzovať tisíce transakcií za sekundu na detekciu nezvyčajných vzorov alebo podozrivých aktivít, čo pomáha chrániť verejné prostriedky."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('financeUI.text4.bold') : "Optimalizácia rozpočtov"}</span>
                                        {!lang ? t('financeUI.text4.text') : ": S pomocou algoritmov môžeme optimalizovať rozpočtové alokácie tak, aby zodpovedali potrebám občanov a zabezpečovali najväčšiu hodnotu za investované peniaze."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('financeUI.text5.bold') : "Automatizovaná správa"}</span>
                                        {!lang ? t('financeUI.text5.text') : ": Mnoho rutinných a časovo náročných úloh môže byť automatizovaných, čo znižuje náklady a zvyšuje efektívnosť."}
                                    </p>
                                    {/* navrhy riesenia */}
                                    <h4 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('financeUI.heading2') : "Návrhy riešenia:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('financeUI.text6.bold') : "Transparentnosť a kontrola"}</span>
                                        {!lang ? t('financeUI.text6.text') : ": Vytvoríme platformu, kde občania môžu v reálnom čase sledovať, ako sú verejné prostriedky využívané, a kde môžu dávať spätnú väzbu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('financeUI.text7.bold') : "Etické využitie AI"}</span>
                                        {!lang ? t('financeUI.text7.text') : ": Zavádzame prísne etické smernice pre využívanie AI vo verejných financiách, aby sa chránili osobné údaje občanov a zabezpečovala férovosť."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('financeUI.text8.bold') : "Vzdelávanie"}</span>
                                        {!lang ? t('financeUI.text8.text') : ": Investujeme do školení a vzdelávacích programov pre úradníkov, aby rozumeli AI a vedeli ju efektívne využívať."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('financeUI.text9.bold') : "Spolupráca s expertmi"}</span>
                                        {!lang ? t('financeUI.text9.text') : ": Budeme spolupracovať s vedcami a expertmi na AI, aby sme zabezpečili, že naše riešenia sú na čele technologického pokroku."}
                                    </p>
                                    <img src={Finance2Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%"  }}></img>
                                    
                                    {/* financovanie a efektivnost */}
                                    <h2 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('financeUI.heading3') : "Financovanie a Efektívnosť prostredníctvom AI"}
                                    </h2>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text10') : "Jedným z hlavných cieľov využívania umelej inteligencie vo verejných financiách je efektívnejšie využitie a alokácia zdrojov. Nižšie sa zameriavame na konkrétne oblasti, kde veríme, že vďaka UI môžeme dosiahnuť značné úspory alebo zvýšiť príjmy."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text11') : "Možnosti úspor:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('financeUI.text12.bold') : "Automatizácia rutinných úloh"}</span>
                                        {!lang ? t('financeUI.text12.text') : ": Znižovaním manuálnej práce môžeme ušetriť približne 15% z nákladov na administratíve, čo by mohlo predstavovať úsporu až 50 miliónov EUR ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('financeUI.text13.bold') : "Detekcia podvodov a nezákonných transakcií"}</span>
                                        {!lang ? t('financeUI.text13.text') : ": Odhadujeme, že vďaka pokročilým algoritmom detekcie podvodov môžeme znížiť podvody až o 20%. To by nám umožnilo vrátiť do štátnej kasy až 100 miliónov EUR ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('financeUI.text14.bold') : "Optimalizácia verejných zákaziek"}</span>
                                        {!lang ? t('financeUI.text14.text') : ": AI môže pomôcť identifikovať nadhodnotené zákazky a zefektívniť proces verejného obstarávania, čím by sa mohli ušetriť stovky miliónov EUR."}
                                    </p>

                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text15') : "Možnosti zvýšenia príjmov:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('financeUI.text16.bold') : "Prediktívna analýza daňových príjmov"}</span>
                                        {!lang ? t('financeUI.text16.text') : ": Vďaka AI môžeme lepšie predpovedať daňové príjmy a prispôsobiť sa fluktuáciám v hospodárstve. Toto by mohlo zvýšiť efektivitu výberu daní a príspevok k príjmom o 5%, čo by mohlo predstavovať zvýšenie príjmov o 200 miliónov EUR ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('financeUI.text17.bold') : "Automatizované monitorovanie daňových neplatičov"}</span>
                                        {!lang ? t('financeUI.text17.text') : ": AI môže pomôcť identifikovať firmy a jednotlivcov, ktorí sa vyhýbajú daňovým povinnostiam, čím by sme mohli získať ďalších 50 miliónov EUR ročne."}
                                    </p>
                                    <img src={Finance1Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%"  }}></img>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingTop: "45px" }}>
                                        {!lang ? t('financeUI.text18') : "Celkovo, vďaka výhodám a možnostiam, ktoré ponúka umelá inteligencia, odhadujeme, že môžeme dosiahnuť úspory a zvýšiť príjmy až o 400 miliónov EUR ročne. Tieto prostriedky by sa potom mohli reinvestovať do kľúčových oblastí, ako sú školstvo, zdravotníctvo a šport, pre lepší život všetkých občanov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.heading4') : "Riziká a príležitosti:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text19') : "Pri využívaní AI vo verejných financiách je dôležité rozpoznať riziká a príležitosti. Zatiaľ čo technológia ponúka ohromné príležitosti pre efektívnosť a transparentnosť, musíme byť ostražití voči možným zneužitím, zaujatosti v algoritmoch alebo nesprávnym interpretáciám dát. Naším cieľom je kombinovať silné stránky AI s etickými zásadami a aktívnym zapojením občanov, aby sme spoločne vytvorili silný a spravodlivý systém správy verejných financií."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('financeUI.text20') : "Pripojte sa k nám v našom úsilí o transparentnejšie a efektívnejšie Slovensko pomocou umelej inteligencie."}
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-4" >
                             <div className="div" style={{ position: "sticky", top: "0" }}>
                            <div className="logo-container">
                                <NavLink
                                    to="/"
                                    className={(navData) =>
                                        navData.isActive ? "active-style" : "none"
                                    }
                                >
                                    <img
                                        className="p-4"
                                        alt="header-logo"
                                        id="program-logo-transparent-id"
                                        src={TransparentLogo}
                                    />
                                </NavLink>
                            </div>
                        </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UIFinance;
