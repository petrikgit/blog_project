import React, { useState, useEffect } from "react";
import axios from "axios";
import { getArticles, getImageById, getCategories } from "../utils/APIRoutes";
import { hideLoader, showLoader, isLangSk } from '../assets/js/helpers.js';
import "../assets/css/articles.css";
import { Helmet } from 'react-helmet-async'
import { useTranslation } from "react-i18next";
import '../assets/css/articles.css'

const ArticlesComponent = () => {
  const [articles, setArticles] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);
  const [randomArticles2, setRandomArticles2] = useState([]);
  const [currentPage] = useState(1);
  const [newestArticles, setNewestArticles] = useState([])
  const [newestArticleImage, setNewestArticleImage] = useState(null)
  const [newestArticleConst, setNewestArticle] = useState({});
  // const [mostReadArticles, setmostReadArticles] = useState([])
  // const [translatedRandomArticles, setTranslatedRandomArticles] = useState("")
  // const [translatedRandom2Articles, setTranslatedRandom2Articles] = useState("")
  // const [translatedMostReadArticles, setTranslatedMostReadArticles] = useState("")
  const [categories, setCategories] = useState(null);
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();

  const fetchArticleImage = async (articleId) => {
    try {
      const response = await axios.post(`${getImageById}?param=small`, { articleId });
      return response.data.image;
    } catch (error) {
      console.error("Error fetching article image:", error);
      return "";
    }
  };

  const fetchArticles = async (page) => {
    showLoader();
    try {
      const newestArticles = await axios.get(`${getArticles}?number=16`, {
        params: { page, status: "Published", params: { number: '16' } },
      });

      newestArticles.data.articles = newestArticles.data.articles.slice(1);

      const newestArticle = await axios.get(`${getArticles}?number=1`, {
        params: { page, status: "Published", params: { number: '1' } },
      });

      let temp = newestArticle.data.articles[0]
      let articleId = temp.id
      const newestArticleConst = { ...temp };

      const image = await axios.post(`${getImageById}?param=medium`, { articleId });

      const articlesWithImages = await Promise.all(
        newestArticles.data.articles.map(async (article) => {
          const image = await fetchArticleImage(article.id);
          return { ...article, image };
        })
      );

      let fetchedRandomArticles = await axios.get(`${getArticles}?number=15`, { params: { status: "Published", demand: 'random', number: "15" } })
      let fetchedRandomArticles2 = await axios.get(`${getArticles}?number=11`, { params: { status: "Published", demand: 'random', number: "10" } })
      // let mostReadArticles = await axios.get(`${getArticles}`, { params: { status: "Published", demand: 'sortasc', number: "10" } })
      let categories = await axios.get(getCategories);

      setNewestArticle(newestArticleConst)
      setNewestArticleImage(image.data.image)
      setCategories(categories.data)
      setNewestArticles(newestArticles.data.articles)

      setRandomArticles(fetchedRandomArticles.data.articles)
      setRandomArticles2(fetchedRandomArticles2.data.articles)
      // setmostReadArticles(mostReadArticles.data.articles)
      setArticles(articlesWithImages);

    } catch (error) {
      console.error("Error fetching articles:", error);
    }

    i18n.changeLanguage(localStorage.getItem("lang"))
    let lang = isLangSk();
    setLang(lang)

    setTimeout(() => {
      document.querySelector("#categories-and-read-more").style.display = "block"
      hideLoader()
    }, 500)
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchArticles(currentPage);
    };

    loadData();


  }, [currentPage]);

  return (
    <div id="main" style={{marginTop: "100px", backgroundColor: "#121e2a" }}>
      {/* <Header /> */}
      <Helmet>
        <title>Strana Spravodlivosť Blog | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta name="description" content="Články vytvorené umelou inteligenciou | Blog | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/`}></link>
      </Helmet>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-8">
            {newestArticleConst.id && (
              <div key={newestArticleConst.id}>
                <div className="row" style={{ marginBottom: "20px" }}>
                  <div className="col-md-12" style={{ minHeight: 0, padding: '15px' }}>
                    <img
                      className="qwe"
                      style={{ height: '450px', width: "100%", objectFit: 'cover', flex: '0 0 auto' }}
                      src={newestArticleImage}
                      alt="article_card"
                    />
                    <div id="newest_article_id" className="ewq" style={{ flex: '1 1 auto', textAlign: "left" }}>
                      <h1 className="card-title" style={{marginTop: "26px"}}>
                        <a
                          style={{ textDecoration: "none", color: "rgb(182 182 182)", fontSize: "37px", fontWeight: "600" }}
                          data-key={newestArticleConst.id}
                          href={`/article?articleId=${newestArticleConst.id}`}
                        >
                          {newestArticleConst.title?.substring(0, 100).concat('...')}
                        </a>
                      </h1>
                      <p className="card-text" style={{ fontSize: "13px", color: "rgb(109, 109, 109)", marginBottom: "15px" }}>
                        {newestArticleConst.shortenedDescription?.substring(0, 150).concat('...')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row" style={{display: "flex"}}>
              <div className="col-md-6" id="newest-articles" style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                {articles.map((article) => (
                  <div className="mb-3" style={{ display: 'flex' }} key={article.id}>
                    <div className="row">
                      <div className="col-md-4" style={{ minHeight: 0 }}>

                        <img className="qwe" style={{ height: '100%', width: "100%", objectFit: 'cover', flex: '0 0 auto' }} src={article.image} alt="article_card" />
                      </div>
                      <div id={`${article.id}-newest-articles`} className="col-md-8" >

                        <div className="ewq" style={{ flex: '1 1 auto', textAlign: "left" }}>
                          <h5 className="card-title"><a style={{ textDecoration: "none", color: "#D3D3D3 !important", fontSize: "17px", fontWeight: "600" }} data-key={article.id} href={`/article?articleId=${article.id}`}>{article.title.substring(0, 40).concat('...')}</a></h5>
                          <p className="card-text" id="paragraph-newest-id"style={{ fontSize: "12px", color: "rgb(109, 109, 109)" }}>{article.shortenedDescription.substring(0, 100).concat('...')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6 " id="random-articles" style={{ backgroundColor: "#111a22", height: "100%", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {randomArticles.map((article) => (
                  <div key={article.id}>
                    <div className="mb-3" style={{ display: 'flex' }}>
                      <div className="row">
                        <div className="col-md-12">
                          <div id={article.id} className="ewq" style={{ flex: '1 1 auto', textAlign: "left" }}>
                            <a style={{ textDecoration: "none", color: "rgb(182 182 182)", fontSize: "11px" }} href={`/article?articleId=${article.id}`}>
                              <h5 className="card-title">{article.title.substring(0, 100).concat('...')}</h5>
                            </a>
                            <p className="card-text" style={{ fontSize: "12px", color: "rgb(109, 109, 109)" }}>{article.shortenedDescription.substring(0, 200).concat('...')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4 sticky-column sticky-top categories-and-read-more" id="categories-and-read-more" style={{ position: "sticky", top: "60px", display: "none" }}>
            <div className="position-sticky" style={{ top: "80px" }}>

              <div id="cards_id" className="col-md-12">
                <div>
                  <div className="card-body">
                    <h5 id="read-more-id" style={{ color: "rgb(182 182 182)" }}>{!lang ? t('articles.readMoreHeading') : "Prečítajte si ešte"}</h5>
                    {randomArticles2.map((article, i) => (
                      <p  id={`${article.id}-read-more`} key={article.id}><span style={{ color: "rgb(182 182 182)", margin: "0" }}>{i + 1}</span>. <a className="par-title-id" style={{ textDecoration: "none", color: "#6d6d6d" }} href={`/article?articleId=${article.id}`}>{article.title}</a></p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesComponent;
