import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import '../assets/css/program.css'
import { useTranslation } from "react-i18next";
import Sport1Img from '../assets/img/sports_1.png'
import Sport2Img from '../assets/img/sports_2.png'
import Sport3Img from '../assets/img/sports_3.png'
import Sport4Img from '../assets/img/sports_4.png'
import styled from "@emotion/styled";

const UISport = () => {
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
            <img class="img-fluid" src={Sport4Img} style={{ width: "100vw", objectFit: "cover", maxHeight: "350px", filter: "blur(0.11rem)" }} ></img>
            <div className="container" style={{ marginTop: "60px", marginBottom: "7%", minHeight: "55vh" }}>
                <div className="info-background">
                    <Helmet>
                        <title>Umelá Inteligencia v športe | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                        <meta
                            name="description"
                            content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v športe"
                        ></meta>
                        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v športe" />
                        <link rel="canonical" href={`/sport`}></link>
                    </Helmet>

                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div id="text-id-1" style={{ textAlign: "justify" }}>
                                    <h2 id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left" }}>
                                        {!lang ? t('sportUI.title') : "Umelá inteligencia v športe"}
                                    </h2>
                                    {/* uvod */}
                                    <h4 style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('sportUI.heading1') : "Úvod"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('sportUI.text1') : "V Spravodlivosť strane veríme, že umelá inteligencia (AI) má obrovský potenciál na zlepšenie mnohých oblastí nášho spoločenského života. Keď hovoríme o športe, táto technológia nám môže pomôcť optimalizovať tréningové programy, analyzovať výkonnosť športovcov a vylepšiť zdravie a bezpečnosť účastníkov. Pri všetkom tomto sa riadime pevnými etickými zásadami a usilujeme sa o transparentnosť vo všetkých našich konaniach."}
                                    </p>
                                    <img src={Sport2Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>

                                    {/* prakticke moznosti */}
                                    <h4 style={{ color: "rgb(109, 109, 109)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('sportUI.heading2') : "Praktické možnosti využitia AI v športe:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('sportUI.text2.bold') : "Analýza Výkonnosti"}</span>
                                        {!lang ? t('sportUI.text2.text') : ": S použitím AI je možné detailne analyzovať pohyb, techniku a výdrž športovcov. Pomocou týchto dát môžeme prispôsobiť tréningové plány, aby sme maximalizovali ich potenciál."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('sportUI.text3.bold') : "Personalizované Tréningové Programy"}</span>
                                        {!lang ? t('sportUI.text3.text') : ": AI môže analyzovať jedinečné fyzické vlastnosti a schopnosti každého športovca, čo umožňuje vytváranie individualizovaných tréningových programov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('sportUI.text4.bold') : "Zranenia a Prevencia"}</span>
                                        {!lang ? t('sportUI.text4.text') : ": AI môže pomôcť predpovedať riziko zranenia prostredníctvom analýzy športovcových dát a tréningových rutín, čo umožňuje trénerom a lekárom prispôsobiť postupy a minimalizovať riziko zranení."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('sportUI.text5.bold') : "Interaktívne Rozhodovanie"}</span>
                                        {!lang ? t('sportUI.text5.text') : ": Použitie AI môže pomôcť rozhodcom pri presnejšom rozhodovaní v kontroverzných situáciách, napr. pri futbale, hokeji alebo tenise."}
                                    </p>
                                    <img src={Sport3Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>



                                    {/* navrhy riesenia */}
                                    <h4 style={{ color: "rgb(109, 109, 109)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('sportUI.heading3') : "Návrhy Riešenia:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('sportUI.text6.bold') : "Transparentnosť v Používaní Dát"}</span>
                                        {!lang ? t('sportUI.text6.text') : ": Budeme sa zaväzovať k tomu, že všetky údaje získané od športovcov budú spracúvané s maximálnym rešpektom k súkromiu a bezpečnosti."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('sportUI.text7.bold') : "Vzdelávacie Programy"}</span>
                                        {!lang ? t('sportUI.text7.text') : ": Zabezpečíme, že tréneri, športovci a všetci zainteresovaní budú mať prístup k vzdelávaniu o tom, ako UI funguje a ako ju môžu využiť vo svoj prospech."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('sportUI.text8.bold') : "Etické Využitie AI"}</span>
                                        {!lang ? t('sportUI.text8.text') : ": Pri vývoji a implementácii AI riešení budeme dôsledne dodržiavať etické normy a zásady."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('sportUI.text9.bold') : "Spolupráca so spoločnosťou"}</span>
                                        {!lang ? t('sportUI.text9.text') : ": Budeme aktívne počúvať názory športových komunít a odborníkov na umelej inteligencii, aby sme zaistili, že naše riešenia sú v súlade so skutočnými potrebami a záujmami."}
                                    </p>

                                    <img src={Sport1Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    {/* konretne riesenia */}

                                    <h3 style={{ color: "rgb(109, 109, 109)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('sportUI.heading4') : "Konkrétne riešenie financovania"}
                                    </h3>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text10.bold') : "Spolupráca so Spoločnosťou"}</span>
                                        {!lang ? t('sportUI.text10.text') : ": Fond by bol naplnený prostriedkami z verejných zdrojov, sponzorských zmlúv a ďalších príjmov. AI by následne analyzovalo, ktoré športy a športovci majú najväčší potenciál na medzinárodnú scénu a kde by sa investície vrátili vo forme úspechov a pozitívneho obrazu Slovenska. Týmto spôsobom by sme zabezpečili, že financie smerujú tam, kde majú najväčší dopad."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text11.bold') : "Prenos časti z príjmov z hazardných hier"}</span>
                                        {!lang ? t('sportUI.text11.text') : ": Zavedenie legislatívy, ktorá by presmerovala časť príjmov zo štátnych lotérií a iných hazardných hier priamo do športového fondu. V mnohých krajinách je tento model úspešne využívaný."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text12.bold') : "Športová lotéria"}</span>
                                        {!lang ? t('sportUI.text12.text') : ": Založenie špeciálnej športovej lotérie, z ktorej výnosy by išli priamo na podporu športu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text13.bold') : "Zvýšenie daní na alkohol a tabak"}</span>
                                        {!lang ? t('sportUI.text13.text') : ": Malé zvýšenie spotrebnej dane na produkty, ktoré sú spojené s nezdravým životným štýlom, ako sú alkohol a tabakové výrobky. Tieto dodatočné príjmy by boli priamo vložené do rozpočtu na podporu športu a zdravého životného štýlu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text14.bold') : "Partnerstvo so súkromným sektorom"}</span>
                                        {!lang ? t('sportUI.text14.text') : ": Aktivácia partnerstiev so súkromným sektorom prostredníctvom sponzorstva, reklamy a komerčných práv v súvislosti s veľkými športovými udalosťami."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text15.bold') : "Eko poplatky"}</span>
                                        {!lang ? t('sportUI.text15.text') : ": Z časti environmentálnych poplatkov, ktoré platia firmy za produkciu odpadu alebo za znečisťovanie, by mohla ísť suma na podporu športových aktivít, ktoré prispievajú k zdravšiemu životnému štýlu a tým aj k lepšiemu životnému prostrediu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('sportUI.text16.bold') : "Turistická daň"}</span>
                                        {!lang ? t('sportUI.text16.text') : ": Z časti príjmov z turistickej dane by mohla ísť suma na podporu športových infraštruktúr, ktoré prilákajú viac turistov, napríklad cyklotrasy, turistické chodníky, športové zariadenia atď."}
                                    </p>

                                    {/* zaver */}
                                    <h4 style={{ color: "rgb(109, 109, 109)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('sportUI.heading5') : "Záver"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('sportUI.text17') : "V Spravodlivosť strane vidíme nespočetné príležitosti, ktoré umelá inteligencia môže priniesť športovému sektoru. Zároveň sme si vedomí rizík a chceme pracovať transparentne a eticky, aby sme maximalizovali prínosy a minimalizovali možné nevýhody. Veríme, že správne vedeným využitím AI v športe môžeme prispieť k lepšiemu a zdravšiemu športovému prostrediu pre všetkých občanov Slovenska."}
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
                        </div>*/}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UISport;
