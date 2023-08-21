import React, { useEffect, useState } from "react";
import Table4 from "../assets/img/table4.png";
import { Link } from "react-router-dom";
import "../assets/css/mandatory-doc.css";
import { Helmet } from 'react-helmet-async'
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { useTranslation } from "react-i18next";


const DocumentOdComponent = () => {
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
    <div style={{marginTop: "3%", marginTop: "120px",  marginTop: "120px" }}>
      <div className="container" style={{height: "70vh"}}>
        <div className="doc-od-container">
          <Helmet>
            <title>Povinne zverejňované informácie od 2.5.2023 | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
            <meta name="description" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
            <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
            <link rel="canonical" href={`/povinne-info/document-od`}></link>
          </Helmet>
          {/* <div className="table4-img-container">
            <img className="table4-img" src={Table4} alt="Table2023" />
          </div> */}
          <h2>Údaje o prijatých pôžičkách v roku 2023</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover" style={{ color: "#b0b0b0", border: "1px solid white",marginTop: "25px" }}>
              <thead style={{ background: "transparent" }}>
                <tr className="table-head-class" style={{ border: "1px solid white" }}>
                  <th style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0" }}>Výška pôžičky dohodnutý úrok</th>
                  <th style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Veriteľ</th>
                  <th style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Trvalý pobyt sídlo</th>
                  <th style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Doba splatnosti</th>
                  <th style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Dátum uzatvorenia zmluvy</th>
                </tr>
              </thead>
              <tbody className="table-document-od" style={{ border: "1px solid white" }}>
                <tr style={{ border: "1px solid white" }}>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>18000 eur<br />bezúročná</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Ing. JUDr. Soňa<br />Gosťová</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Anízova 20409/25<br />821 07 Bratislava-Vrakuňa</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}><br />31.12.2024</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid" , color: "#b0b0b0" }}><br />23.06.2023</td>
                </tr>
                <tr style={{ border: "1px solid white" }}>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>15000 eur<br />bezúročná</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>JUDr. Gustáv<br />Ret</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}>Vansovej 2<br />811 03 Bratislava</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}><br />31.12.2024</td>
                  <td style={{ backgroundColor: "transparent", border: "1px solid", color: "#b0b0b0"  }}><br />03.08.2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="document">
            <span id="title-2">
              <a className="document-link" href="/povinne-info/document-do">{!lang ? t('mandatoryFrom.text') : "Povinne zverejňované informácie do 1.5.2023"}</a></span>
          </div>
        </div>
      </div></div>
  );
};

export default DocumentOdComponent;
