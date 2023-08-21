import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import TransparentLogo from "../assets/img/logo_socha_blue.png";
import { NavLink } from "react-router-dom";
import '../assets/css/program.css'
import { useTranslation } from "react-i18next";

const VolebnyProgram = () => {
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
        <div style={{ backgroundColor: "#0c141b" }}>


            <div className="container" style={{ marginTop: "120px", marginBottom: "7%" }}>
                <div className="info-background">
                    <Helmet>
                        <title>Volebný program | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                        <meta
                            name="description"
                            content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
                        ></meta>
                        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
                        <link rel="canonical" href={`/ochrana`}></link>
                    </Helmet>
                    <div className="row">
                        <div className="col-md-8">
                            <div style={{ textAlign: "justify" }}>
                                <div id="text-id-1" >
                                    <h2 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)' }}>
                                        {!lang ? t('electoralProgram.heading') : "Volebný program"}
                                    </h2>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point1.heading') : "1. Verejné služby riadené umelou inteligenciou: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point1.text') : "Implementovať technológie AI na optimalizáciu poskytovania verejných služieb vrátane zdravotnej starostlivosti, vzdelávania, dopravy čím sa zabezpečí spravodlivý prístup a efektívne prideľovanie zdrojov."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point2.heading') : "2. Rozhodovanie založené na údajoch: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point2.text') : "Využívanie algoritmov AI a analýzy údajov na tvorbu politík založených na dôkazoch, čím sa zabezpečí, že rozhodnutia budú vychádzať z presných informácií a transparentných procesov."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point3.heading') : "3. Prediktívna zdravotná starostlivosť: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point3.text') : "Využívajte AI a prediktívne modelovanie na identifikáciu zdravotných rizík a trendov, čo umožní prijať proaktívne opatrenia na prevenciu prepuknutia chorôb, zlepšenie verejného zdravia a efektívne prideľovanie zdrojov zdravotnej starostlivosti."}
                                    </p>
                                </div>
                                <div id="text-id-2">
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point4.heading') : "4. Inteligentné plánovanie infraštruktúry: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point4.text') : "Využívanie systémov poháňaných umelou inteligenciou na plánovanie miest, riadenie dopravy a rozvoj infraštruktúry s cieľom zvýšiť efektívnosť, znížiť dopravné zápchy a podporiť udržateľné a zdravé životné prostredie."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point5.heading') : "5. Monitorovanie a ochrana životného prostredia: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point5.text') : "Zavádzanie systémov poháňaných umelou inteligenciou na monitorovanie a analýzu údajov o životnom prostredí, ktoré uľahčujú účinné opatrenia na boj proti znečisteniu, ochranu ekosystémov a podporu udržateľného rozvoja."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point6.heading') : "6. Zapojenie občanov a spätná väzba: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point6.text') : "Vyvíjať platformy poháňané umelou inteligenciou na zapojenie občanov, ktoré umožnia spätnú väzbu v reálnom čase, účasť na rozhodovacích procesoch a podporia inkluzívnu a citlivú vládu."}
                                    </p>
                                </div>
                                <div id="text-id-3">
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point7.heading') : "7. Etické usmernenia pre umelú inteligenciu: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point7.text') : "Zaviesť jasné usmernenia a predpisy pre etický vývoj a zavádzanie technológií umelej inteligencie, ktoré zabezpečia súkromie, bezpečnosť a ochranu pred algoritmickou zaujatosťou alebo diskrimináciou."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point8.heading') : "8. Vzdelávanie a zvyšovanie kvalifikácie: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point8.text') : "Podporujte gramotnosť v oblasti AI a poskytnite vzdelávacie programy, aby občania a štátni zamestnanci získali potrebné zručnosti na pochopenie a efektívne zapojenie systémov založených na AI."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point9.heading') : "9. Digitálna inklúzia: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }} >
                                        {!lang ? t('electoralProgram.point9.text') : "Preklenúť digitálnu priepasť zabezpečením prístupu k technológiám AI a digitálnej infraštruktúre pre všetkých občanov bez ohľadu na ich sociálno-ekonomický status a poskytovaním podpory marginalizovaným komunitám."}
                                    </p>
                                </div>
                                <div id="text-id-4">
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point10.heading') : "10. Partnerstvá založené na spolupráci: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point10.text') : "Podporovať spoluprácu medzi vládou, akademickou obcou a priemyslom s cieľom podporiť inovácie, výskum a vývoj v oblasti aplikácií AI pre správu vecí verejných a zároveň zabezpečiť zodpovedné a inkluzívne postupy."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('electoralProgram.point11.heading') : "11. Optimalizácia financovania športu pomocou AI: "}</h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('electoralProgram.point11.text') : "Jedným z kľúčových výziev športového sektora na Slovensku je efektívne a transparentné rozdelenie financií medzi rôznymi športovými disciplínami, klubmi a jednotlivými športovcami. Vytvoríme model, ktorý bude schopný analyzovať výkony športovcov, potreby jednotlivých disciplín, aktuálne trendy a potenciál rastu.Tento model bude tiež schopný hodnotiť efektívnosť doterajších investícií do športu, identifikovať oblasti, ktoré potrebujú viac financií, a odporučiť, ako najlepšie alokovať prostriedky."}
                                    </p>
                                </div>
                                <div id="text-id-5">
                                    <p>{!lang ? t('electoralProgram.paragraph') : "* Je dôležité poznamenať, že zavádzanie AI do správy vecí verejných by mali sprevádzať robustné právne rámce, silné mechanizmy riadenia a priebežné monitorovanie a hodnotenie s cieľom riešiť potenciálne riziká a zabezpečiť, aby sa technológia používala eticky, transparentne a v najlepšom záujme všetkých občanov."}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4" >
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

export default VolebnyProgram;
