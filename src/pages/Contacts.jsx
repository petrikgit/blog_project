import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers.js";
import { Helmet } from "react-helmet-async";
import "../assets/css/footer.css";
import "../assets/css/contacts.css";
import { useTranslation } from "react-i18next";

const ContactsComponent = ({ google }) => {
  const [mapStyles, setMapStyles] = useState({});
  const [t, i18n] = useTranslation()
  const [langCheck, setLang] = useState();

  const handleResize = () => {

    setTimeout(() => {
      if (window.innerWidth <= 767) {
        setMapStyles({
          width: "100%",
          height: "100%",
        });
      } else {
        setMapStyles({
          width: "100%",
          height: "100%",
        });
      }
    }, 500);
  };

  useEffect(() => {
    showLoader();
    window.addEventListener("resize", handleResize);
    let lang = isLangSk();
    setLang(lang)
    i18n.changeLanguage(localStorage.getItem("lang"))
    setTimeout(hideLoader, 700);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    
  }, []);

  return (
    <div className="container" id="container-contacts" style={{ height: "100%", marginTop: "50px",marginBottom: "110px", paddingTop: "50px" }}>
      <Helmet>
        <title>Kontaky | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta
          name="description"
          content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
        ></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/kontakty`}></link>
      </Helmet>
      <div className="row" style={{ height: "90%", width: "100%" }}>
        <div className="col-md-6" >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80%',
          }}>
            <div id="contact-container"className="container" style={{ height: "60%", padding: "50px" }}>
              <div className="row" style={{ height: "20%" }}>
                <div>
                  <h2 className="contacts-title">{!langCheck ? t('contact.heading') : "Kontaktujte nás"}</h2>
                  {/* <p className="contacts-content">
                  {!langCheck ? t('contact.street') : "Tomášikova 3/A, 821 01 Bratislava-Ružinov"}
                </p> */}
                </div>
              </div>
              <div className="row" style={{ height: "40%" }}>
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i className="fas fa-map-marker-alt fa-lg" style={{ color: "#ffff" }}></i>
                    </div>
                  </div>
                  <div className="col-md-10 d-flex align-items-center">
                    <p style={{ margin: 0 }}>Tomášikova 3/A, 821 01 Bratislava-Ružinov</p>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "15px" }}>
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i className="fas fa-phone fa-lg" style={{ color: "#fff" }}></i>
                    </div>
                  </div>
                  <div className="col-md-10 d-flex align-items-center">
                    <p style={{ margin: 0 }}>+421 901 708 682</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <div className="circle-icon">
                      <i className="fas fa-envelope fa-lg" style={{ color: "#fff" }}></i>
                    </div>
                  </div>
                  <div className="col-md-10 d-flex align-items-center">
                    <p style={{ margin: 0 }}>spravodlivost.politicka.strana@gmail.com </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="contacts-id" className="info-container">
            <div>
              
              <hr className="contacts-line" />
              <p className="contacts-content" style={{color: "#6d6d6d", overflowWrap: "break-word"}}> 
              {!langCheck ? t('contact.text') : "SPRAVODLIVOSŤ, politická strana registrovaná Ministerstvom vnútra SR v registri politických strán pod číslom OVVS 3 – 2011/029916, sídlo: Tomášikova 3/A, 821 01 Bratislava-Ružinov, Slovenská republika, IČO: 42 257 441, DIČ: 2820011898, bankové spojenie: Tatra banka, a.s., číslo účtu: SK68 1100 0000 0029 2086 6869, email: spravodlivost.politicka.strana@gmail.com"}
              </p>
            </div>
          </div> */}
        </div>
        <div className="col-md-6" style={{ height: "67vh" }}>
          <div className="map-container">
            <Map
              google={google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
                lat: 48.1541431,
                lng: 17.1632968,
              }}
            >
              <Marker
                position={{
                  lat: 48.1541431,
                  lng: 17.1632968,
                }}
              />
            </Map>
          </div>
        </div>
      </div>
      {/* </div> */}

    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBd1c6CoECyrmsDnPQvq-KrVvc7Dmsecwc",
})(ContactsComponent);
