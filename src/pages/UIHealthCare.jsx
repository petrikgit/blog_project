import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import TransparentLogo from "../assets/img/logo_socha_blue.png";
import { NavLink } from "react-router-dom";
import '../assets/css/program.css'
import Medicine1Img from '../assets/img/medicine_1.png'
import Medicine2Img from '../assets/img/medicine_2.png'
import Medicine3Img from '../assets/img/medicine_3.png'
import Medicine4Img from '../assets/img/medicine_4.png'
import { useTranslation } from "react-i18next";

const UIHealthCare = () => {
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
            <img class="img-fluid" src={Medicine1Img} style={{ width: "100vw", objectFit: "cover", maxHeight: "350px", filter: "blur(0.11rem)" }} ></img>
            <div className="container" style={{ marginTop: "60px", marginBottom: "7%" }}>
                <div className="info-background">
                    <Helmet>
                        <title>Umelá Inteligencia v Slovenskom Zdravotníctve | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                        <meta
                            name="description"
                            content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v Slovenskom Zdravotníctve"
                        ></meta>
                        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023 | Umelá Inteligencia v Slovenskom Zdravotníctve" />
                        <link rel="canonical" href={`/healthcare`}></link>
                    </Helmet>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <div id="text-id-1" style={{ textAlign: "justify" }}>
                                    <h2 className="mb-5" id="header-main-id-program" style={{ color: 'rgb(182, 182, 182)', textAlign: "left" }}>
                                        {!lang ? t('healthUI.title') : "Umelá inteligencia v zdravotníctve"}
                                    </h2>
                                    <h4 style={{ color: "rgb(182, 182, 182)" }}>
                                        {!lang ? t('healthUI.heading1') : "Úvod"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('healthUI.text1') : "V strane Spravodlivosť veríme, že umelá inteligencia (AI) môže priniesť revolúciu v oblasti zdravotníctva. Naša vízia je zdravotný systém, ktorý je transparentnejší, efektívnejší a viac prispôsobeným potrebám občanov. Avšak s veľkým potenciálom prichádzajú aj výzvy a riziká. V tejto sekcii vám ponúkneme prehľad o tom, ako vidíme budúcnosť zdravotníctva so zapojením AI, aké sú možnosti, riziká a naše návrhy riešení."}
                                    </p>
                                    <img src={Medicine2Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('healthUI.heading2') : "Praktické možnosti využitia AI v zdravotníctve:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('healthUI.text2.bold') : "Diagnostika a liečba"}</span>{!lang ? t('healthUI.text2.text') : ": AI môže analyzovať klinické dáta pacientov rýchlejšie a presnejšie, čím pomáha lekárom v diagnostike a určovaní najlepšej liečby."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('healthUI.text3.bold') : "Personalizované vzdelávanie"}</span>{!lang ? t('healthUI.text3.text') : ": Na základe genetických informácií môže AI navrhovať liečby šité na mieru pre jednotlivého pacienta."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('healthUI.text4.bold') : "Optimalizácia prevádzky nemocníc"}</span>{!lang ? t('healthUI.text4.text') : ": Prostredníctvom AI môžeme lepšie riadiť zásoby, personál a vybavenie nemocníc, čím sa znižujú náklady a skracuje čakacia doba pre pacientov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>4. {!lang ? t('healthUI.text5.bold') : "Virtuálni zdravotni asistenti"}</span>{!lang ? t('healthUI.text5.text') : ": Pacienti môžu mať prístup k virtuálnym asistentom, ktorí poskytnú rady ohľadom liečby, liekov alebo životného štýlu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>5. {!lang ? t('healthUI.text6.bold') : "Vysoká Presnosť Diagnostiky"}</span>{!lang ? t('healthUI.text6.text') : ": AI môže identifikovať ochorenia s vyššou presnosťou ako ľudskí lekári, napr. rakovina prsníka s presnosťou 99%."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>6. {!lang ? t('healthUI.text7.bold') : "Úspory Nákladov"}</span>{!lang ? t('healthUI.text7.text') : ": Odhaduje sa, že AI môže do roku 2030 znížiť náklady na zdravotnú starostlivosť na Slovensku až o 1 miliardu eur ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>7. {!lang ? t('healthUI.text8.bold') : "Zníženie Administratívy"}</span>{!lang ? t('healthUI.text8.text') : ": Automatizácia úloh môže znížiť administratívne zaťaženie lekárov až o 50%."}
                                    </p>
                                    <img src={Medicine4Img} style={{ width: "100%", marginTop: "30px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('healthUI.heading3') : "Riziká a výzvy:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('healthUI.text9.bold') : "Ochrana dát"}</span>{!lang ? t('healthUI.text9.text') : ": Zabezpečenie citlivých zdravotných informácií je kľúčové. Musíme zabezpečiť, aby tieto dáta neboli zneužité alebo kompromitované."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('healthUI.text10.bold') : "Závislosť od technológie"}</span>{!lang ? t('healthUI.text10.text') : ": Nesmieme sa úplne spoľahnúť na UI na úkor ľudského úsudku a interakcie."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('healthUI.text11.bold') : "Etické dilemy"}</span>{!lang ? t('healthUI.text11.text') : ": AI môže prinášať otázky týkajúce sa morálky a etiky, napríklad v oblasti genetického inžinierstva."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('healthUI.heading4') : "Naše návrhy riešení:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('healthUI.text12.bold') : "Vytvorenie regulačného rámca"}</span>{!lang ? t('healthUI.text12.text') : ": Budeme aktívne pracovať na vytvorení legislatívy, ktorá zabezpečí, aby využitie AI v zdravotníctve bolo bezpečné, transparentné a etické."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('healthUI.text13.bold') : "Spolupráca s odborníkmi"}</span>{!lang ? t('healthUI.text13.text') : ": Budeme spolupracovať s lekármi, vedcami a inými odborníkmi, aby sme zabezpečili, že technológia je v súlade s lekárskou praxou."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>3. {!lang ? t('healthUI.text14.bold') : "Vzdelávanie a osveta"}</span>{!lang ? t('healthUI.text14.text') : ": Informujeme verejnosť o výhodách a rizikách AI v zdravotníctve a podporujeme vzdelávanie zdravotníckeho personálu v oblasti nových technológií."}
                                    </p>
                                    <h4 style={{ color: "rgb(182, 182, 182)", paddingTop: "45px", paddingBottom: "25px" }}>
                                        {!lang ? t('healthUI.heading5') : "Financovanie a efektívne využitie prostriedkov:"}
                                    </h4>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('healthUI.text15') : "Umelá inteligencia ponúka nielen klinické výhody, ale aj možnosti pre zlepšenie finančnej efektívnosti v zdravotníctve. Nižšie uvádzame, ako plánujeme financovať vývoj a implementáciu AI riešení a kde vidíme príležitosti na úsporu."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>1. {!lang ? t('healthUI.text16.heading') : "Zdroje financovania:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text16.bold1') : "Z EU fondov"}</span>{!lang ? t('healthUI.text16.text1') : ": Na základe našich prieskumov existuje niekoľko európskych grantov zameraných na inovácie v zdravotníctve, z ktorých by sme mohli získať až 15 miliónov EUR."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text16.bold2') : "Partnerstvo súkromného sektora"}</span>{!lang ? t('healthUI.text16.text2') : ": Prostredníctvom partnerstiev s technologickými firmami a vývojovými laboratóriami by sme mohli získavať spolufinancovanie projektov. Očakávame sumu približne 10 miliónov EUR za nasledujúce tri roky."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text16.bold3') : "Národné granty na výskum a vývoj"}</span>{!lang ? t('healthUI.text16.text3') : ": Z týchto zdrojov odhadujeme získať 5 miliónov EUR."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        <span style={{ fontWeight: "bold" }}>2. {!lang ? t('healthUI.text17.heading') : "Očakávané úspory a efektívnosť:"}</span>
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text17.bold1') : "Optimalizácia prevádzky nemocníc"}</span>{!lang ? t('healthUI.text17.text1') : ": S implementáciou AI v riadení nemocničných zdrojov predpokladáme úspory v hodnote 8 miliónov EUR za tri roky vďaka znižovaniu plytvania a efektívnejšiemu využívaniu zdrojov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text17.bold2') : "Diagnostická efektivita"}</span>{!lang ? t('healthUI.text17.text2') : ": S rýchlejšou a presnejšou diagnostikou môžeme skrátiť dobu hospitalizácie a znižovať náklady na nadbytočné testy, čo by mohlo viesť k úsporám približne 5 miliónov EUR ročne."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)", paddingLeft: "25px" }}>
                                        <span style={{ fontWeight: "bold" }}>·</span> <span style={{ fontWeight: "bold" }}>{!lang ? t('healthUI.text17.bold3') : "Personalizovaná medicína"}</span>{!lang ? t('healthUI.text17.text3') : ": Cielená liečba na základe genetických informácií môže znižovať potrebu drahých liekov a postupov. Odhadovaná úspora v tomto segmente je 4 milióny EUR ročne."}
                                    </p>
                                    <img src={Medicine3Img} style={{ width: "100%", marginTop: "30px", marginBottom: "70px", maxHeight: "512px", objectFit: "cover", objectPosition: "100% 5%" }}></img>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('healthUI.text18') : "Celkové očakávané úspory za tri roky by tak mohli dosiahnuť hodnotu približne 50 miliónov EUR. Tieto úspory by boli následne reinvestované späť do zdravotníckeho systému, do ďalšieho výskumu a inovácií a predovšetkým do zlepšenia starostlivosti o pacientov."}
                                    </p>
                                    <p style={{ color: "rgb(109, 109, 109)" }}>
                                        {!lang ? t('healthUI.text19') : "V strane Spravodlivosť sa zaväzujeme k transparentnému a zodpovednému využívaniu verejných prostriedkov. S pomocou umelého intelektu vidíme reálnu príležitosť pre Slovensko stať sa lídrom v inováciách v zdravotníctve, zatiaľ, čo efektívne spravujeme a využívame finančné zdroje v prospech všetkých občanov."}
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

export default UIHealthCare;
