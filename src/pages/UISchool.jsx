import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import TransparentLogo from "../assets/img/logo_socha_blue.png";
import { NavLink } from "react-router-dom";
import '../assets/css/uischool.css'
import School1Img from '../assets/img/school_1.png'
import School2Img from '../assets/img/school_2.png'
import School3Img from '../assets/img/school_3.png'
import School4Img from '../assets/img/school_4.png'
import { useTranslation } from "react-i18next";

const UISchool = () => {
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
            <img class="img-fluid" src={School3Img} style={{ width: "100vw", objectFit: "cover", maxHeight: "350px", filter: "blur(0.11rem)" }} ></img>
            <div className="container" style={{ marginTop: "60px", marginBottom: "7%", minHeight: "50vh" }}>
                <div className="info-background">
                    <Helmet>
                        <title>Umelá Inteligencia v Slovenskom Školstve | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                        <meta
                            name="description"
                            content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v Slovenskom Školstve"
                        ></meta>
                        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v Slovenskom Školstve" />
                        <link rel="canonical" href={`/school`}></link>
                    </Helmet>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div id="text-id-1" style={{ textAlign: "justify" }}>
                                    <h2 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left" }}>
                                        {!lang ? t('educationUI.title') : "Umelá inteligencia v Slovenskom školstve"}
                                    </h2>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>
                                        {!lang ? t('educationUI.heading1') : "Úvod"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text1') : "V našej strane, Spravodlivosť, sme presvedčení, že umelá inteligencia (AI) má obrovský potenciál transformovať školstvo na Slovensku. Vo svete 21. storočia, kde technológia rýchlo napreduje, môže školstvo týmto spôsobom dosiahnuť vyššiu úroveň efektívnosti a inovácií. Zdôrazňujeme etické využívanie AI a jasne definovali riziká aj príležitosti tejto novej technológie."}
                                    </p>
                                    <img src={School4Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('educationUI.heading2') : "Súčasný stav školstva na Slovensku"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text2') : "Podľa medzinárodných hodnotení je kvalita slovenského školstva stredná až nižšia:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text3') : "PISA 2022: 43. miesto zo 79 krajín."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text4') : "TIMSS 2019: 46. miesto zo 64 krajín."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text5') : "PIRLS 2016: 44. miesto zo 50 krajín."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text6') : "Dôvody Pre Reformu Vzdelávania:"}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('educationUI.text7') : "Praktické možnosti využitia AI v školstve:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('educationUI.text8.bold') : "Personalizované vzdelávanie:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text8.bulletText') : "AI môže analyzovať štýl učenia a potreby každého študenta, aby mu poskytla prispôsobené vzdelávacie zdroje a príklady."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('educationUI.text9.bold') : "Automatizované hodnotenie:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text9.bulletText') : "Rýchle a objektívne hodnotenie študentských prác a testov pomocou algoritmov AI."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('educationUI.text10.bold') : "Virtuálne laboratóriá a simulácie:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text10.bulletText') : "Študenti môžu vykonávať experimenty a modelovať situácie v digitálnom prostredí."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('educationUI.text11.bold') : "Virtuálne laboratóriá a simulácie:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text11.bulletText') : "Študenti môžu vykonávať experimenty a modelovať situácie v digitálnom prostredí."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>5. {!lang ? t('educationUI.text12.bold') : "Asistenti na podporu učiteľov:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text12.bulletText') : "Digitálni asistenti môžu pomáhať učiteľom pri príprave lekcií alebo riešení administratívnych úloh."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('educationUI.heading3') : "Navrhované riešenia:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('educationUI.text13.bold') : "Etická regulácia:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text13.bulletText') : "Zabezpečiť transparentnosť a zodpovednosť pri využívaní AI. Vytvorenie etických usmernení pre školy a vývojárov programov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('educationUI.text14.bold') : "Odborná príprava učiteľov:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text14.bulletText') : "Organizovať školenia pre učiteľov v oblasti technológií a ich využitia v edukačnom procese."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('educationUI.text15.bold') : "Zabezpečenie dát:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text15.bulletText') : "Vytvorenie štandardov pre ochranu študentských údajov a ich bezpečné skladovanie."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('educationUI.text16.bold') : "Integrácia do štátnych vzdelávacích plánov:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text16.bulletText') : "Zaintegrovať aplikácie založené na AI do učebných osnov a prispôsobiť ich potrebám slovenského vzdelávacieho systému."}
                                    </p>
                                    <img src={School2Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('educationUI.heading4') : "Financovanie AI v Školstve:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text17') : "Využitie umelej inteligencie v školstve môže byť nákladová investícia, ale na druhej strane prináša dlhodobé finančné výhody vzhľadom na úspory a efektívnosť. Tu sú naše návrhy na zabezpečenie finančných prostriedkov a potenciálnych úspor:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('educationUI.text18.bold') : "Redistribúcia rozpočtu:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text18.bulletText') : "Z revízie súčasného rozpočtu vzdelávania by sme mohli realokovať približne 5% zbytočných výdavkov na implementáciu technológií založených na AI. Toto by mohlo znamenať sumu približne 25 miliónov eur ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('educationUI.text19.bold') : "Úspory z automatizácie administratívy:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text19.bulletText') : "S využitím AI môžeme znížiť administratívne náklady o približne 15%. Pri súčasnom rozpočte administratívy vo výške 50 miliónov eur by to znamenalo úsporu 7,5 milióna eur ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('educationUI.text20.bold') : "Partnerstvo s technologickými firmami:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text20.bulletText') : "Iniciovať partnerstvá s technologickými spoločnosťami, ktoré by mohli ponúknuť sponzorstvo alebo technickú podporu výmenou za reklamný priestor alebo výskum. Očakávame príjmy vo výške približne 10 miliónov eur ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('educationUI.text21.bold') : "Dotácie z EÚ:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text21.bulletText') : "Vzhľadom na dôležitosť technológie a inovácií v vzdelávaní by sme mohli žiadať o dotácie z Európskej únie. Predpokladaná suma dotácií môže dosiahnuť až 15 miliónov eur v priebehu nasledujúcich 5 rokov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>5. {!lang ? t('educationUI.text22.bold') : "Úspory z digitálnej edukácie:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text22.bulletText') : "S digitálnymi učebnicami a materiálmi môžeme znížiť náklady na tlačené materiály o približne 20%. To by znamenalo úsporu približne 3 milióny eur ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text23') : "Celkové očakávané financovanie a úspory:"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text24') : "Redistribúcia rozpočtu: +25 mil. eur"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text25') : "Úspory z administratívy: +7,5 mil. eur"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text26') : "Partnerstvá: +10 mil. eur"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text27') : "Dotácie z EÚ: +15 mil. eur (za 5 rokov)"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text28') : "Úspory na tlačených materiáloch: +3 mil. eur"}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>{!lang ? t('educationUI.text29.bold') : "Celkovo:"}</span> {!lang ? t('educationUI.text29.text') : "Približne 60,5 milióna eur za prvý rok (s postupným nárastom z dotácií EÚ v nasledujúcich rokoch)."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text30') : "S týmito finančnými zdrojmi a úsporami veríme, že môžeme úspešne integrovať AI do nášho vzdelávacieho systému a priniesť moderné a efektívne riešenia pre všetkých študentov na Slovensku."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('educationUI.text31') : "Riziká a príležitosti:"}
                                    </h4>

                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('educationUI.text32.bold') : "Riziká:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text32.bulletText1') : "Možné nesprávne využívanie študentských dát."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text32.bulletText2') : "Nadmerná závislosť na technológii na úkor ľudského faktora."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text32.bulletText3') : "Potenciálna strata pracovných miest v oblasti vzdelávania."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('educationUI.text33.bold') : "Príležitosti:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text33.bulletText1') : "Modernizácia vzdelávacieho systému."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text33.bulletText2') : "Efektívnejšie využívanie zdrojov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> {!lang ? t('educationUI.text33.bulletText3') : "Zlepšenie kvality vzdelávania a prispôsobenie sa individuálnym potrebám študentov."}
                                    </p>
                                    <img src={School1Img} style={{ width: "100%", marginTop: "30px", marginBottom: "40px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>

                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('educationUI.text34') : "Veríme, že správnym využitím umelej inteligencie môžeme dosiahnuť vzdelávací systém, ktorý bude viac reagovať na potreby študentov a pripraví ich na výzvy 21. storočia. Naša strana Spravodlivosť sa zaväzuje pracovať transparentne a s dôrazom na etické princípy pri zavádzaní týchto technológií."}
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

export default UISchool;
