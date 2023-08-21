import React, { useState, useEffect } from "react";
import axios from "axios";
import { getArticles, getImageById } from "../utils/APIRoutes";
import '../assets/css/index.css'
import { getURLParamPage, hideLoader, showLoader, isLangSk } from '../assets/js/helpers.js'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from "react-i18next";

const NotFound = () => {
  let pageName = getURLParamPage();

  const [articles, setArticles] = useState([]);
  const [randomArticles, setRandomArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [mostReadArticles, setmostReadArticles] = useState([])
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();
  // const [translatedReadMoreArticles, setTranslatedReadMoreArticles] = useState([])
  // const [translatedMostReadArticles, setTranslatedMostReadArticles] = useState([])

  const fetchArticleImage = async (articleId) => {
    try {
      const response = await axios.post(`${getImageById}?param=small`, { articleId });
      return response.data.image;
    } catch (error) {
      console.error("Error fetching article image:", error);
      return "";
    }
  };


  const renderPagination = () => {
    const pageNumbers = totalPages;
    const paginationItems = [];

    for (let i = 1; i <= pageNumbers; i++) {
      paginationItems.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    return (
      <nav>
        <ul className="pagination">
          {paginationItems}
        </ul>
      </nav>
    );
  };

  const handlePageChange = async (pageNumber) => {
    fetchArticles(pageNumber, 10, 'Published');
  };


  const fetchArticles = async (page, itemsPerPage, status, search) => {
    showLoader()
    i18n.changeLanguage(localStorage.getItem("lang"))
    let lang = isLangSk();

    setLang(lang)
    try {
      const articlesByCategory = await axios.get(getArticles, {
        params: { page, itemsPerPage, status, search, category: decodeURI(pageName) },
      });
      let fetchedRandomArticles = await axios.get(`${getArticles}?number=11`, { params: { status: "Published", demand: 'random', number: "11" } })

      const articlesWithImages = await Promise.all(
        fetchedRandomArticles.data.articles.map(async (article) => {
          const image = await fetchArticleImage(article.id);
          return { ...article, image };
        })
      );


      let mostReadArticles = await axios.get(`${getArticles}`, { params: { status: "Published", demand: 'sortasc', number: "10" } })

      setRandomArticles(fetchedRandomArticles.data.articles)
      setmostReadArticles(mostReadArticles.data.articles)
      setArticles(articlesWithImages);
      setTotalPages(articlesByCategory.data.totalPages);
      setCurrentPage(page)

    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles(currentPage);
  }, [pageName]);


  useEffect(() => {
    // if (localStorage.getItem('lang') !== "sk" || !localStorage.getItem("lang")) {
    //   if (randomArticles.length > 0) {
    //     const translateAndHideLoader = async () => {
    //       let arrReadMore = [];
    //       let arrMostReadA = []
    //       let isPromisesCompleted = false;

    //       const title = document.getElementById("title-id").innerHTML;
    //       const title1 = document.getElementById("title-id").innerHTML;

    //       let noArticles = document.getElementById("no-articles-id")

    //       if (noArticles) {
    //         const noArticlesText = document.getElementById("no-articles-id").innerHTML;
    //         let translatedNoArticlesText = await translateContent(noArticlesText);
    //         document.getElementById("no-articles-id").innerHTML = translatedNoArticlesText;
    //       }
    //       const readMoreTitle = document.getElementById("read-more-title-id").innerHTML;
    //       const mostReadTitle = document.getElementById("most-read-title-id").innerHTML;

    //       let translatedReadMore = await translateContent(title);
    //       let translatedReadMore1 = await translateContent(title1);

    //       let translatedReadMoreTitle = await translateContent(readMoreTitle);
    //       let translatedMostRead = await translateContent(mostReadTitle);

    //       document.getElementById("title-id").innerHTML = translatedReadMore;
    //       document.getElementById("title-id-1").innerHTML = translatedReadMore1;

    //       document.getElementById("read-more-title-id").innerHTML = translatedReadMoreTitle;
    //       document.getElementById("most-read-title-id").innerHTML = translatedMostRead;

    //       await Promise.all(
    //         randomArticles.map(async (article) => {
    //           const more_articles_id = document.getElementById(`${article.id}-read-more`).innerHTML;
    //           let translated_more_articles_id = await translateContent(more_articles_id);
    //           document.getElementById(`${article.id}-read-more`).innerHTML = translated_more_articles_id;
    //           arrReadMore.push(translated_more_articles_id);
    //           isPromisesCompleted = false;
    //         })
    //       ).then(async () => {
    //         await Promise.all(
    //           mostReadArticles.map(async (article) => {
    //             const more_articles_id = document.getElementById(`${article.id}-most-read`).innerHTML;
    //             let translated_more_articles_id = await translateContent(more_articles_id);
    //             document.getElementById(`${article.id}-most-read`).innerHTML = translated_more_articles_id;
    //             arrMostReadA.push(translated_more_articles_id);
    //             isPromisesCompleted = false;
    //           }))
    //       }).then(async () => {
    //         if (articles.length !== 0) {
    //           await Promise.all(
    //             articles.map(async (article) => {
    //               const more_articles_id = document.getElementById(`${article.id}`).innerHTML;
    //               let translated_more_articles_id = await translateContent(more_articles_id);
    //               document.getElementById(`${article.id}`).innerHTML = translated_more_articles_id;
    //               arrMostReadA.push(translated_more_articles_id);
    //               isPromisesCompleted = false;
    //             }))
    //         }
    //       }).then(() => {
    //         isPromisesCompleted = true;
    //       });

    //       setTranslatedReadMoreArticles(arrReadMore);
    //       setTranslatedMostReadArticles(arrReadMore);

    //       if (isPromisesCompleted) {
    //         hideLoader();
    //       }
    //     }
    //     setTimeout(translateAndHideLoader, 1500);
    //   }
    // } else {
    setTimeout(hideLoader, 500);
    // }
  }, [randomArticles])

  return (
    <div style={{marginTop: "5%", backgroundColor: "#0c141b"}}>
      <Helmet>
        <title>404 | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta name="description" content="Ľutujeme. Stránku sa nepodarilo nájsť. | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/*`}></link>
      </Helmet>
      <div className="container mt-5 mb-5">
        <div className="row">
          {/* left col */}
          <div className="col-md-6">
            <h3 style={{color: "rgb(182, 182, 182)"}}id="title-id">{!lang ? t('404.heading') : "404 - Stránka nebola najdená"}</h3>
            <p id="title-id-1" className="mb-4">{!lang ? t('404.text') : "Ľutujeme. Stránku sa nepodarilo nájsť."}</p>
            <hr></hr>
            {articles.length !== 0 ? articles.map((article) => (
              <div key={article.id} className="mb-3" style={{ display: 'flex' }} >
                <div className="row">
                  <div className="col-md-4" style={{ minHeight: 0, maxWidth: "100%" }}>

                    <img className="qwe" style={{ height: '100px', width: "100%", objectFit: 'cover', flex: '0 0 auto' }} src={article.image} alt="article_image" />
                  </div>
                  <div id={article.id} className="col-md-8" >

                    <div className="ewq" style={{ flex: '1 1 auto', textAlign: "left" }}>
                      <h5 className="card-title"><a style={{ textDecoration: "none", color: "rgb(182, 182, 182)", fontSize: "17px" }} href={`/article?articleId=${article.id}`}>{article.title.substring(0, 40).concat('...')}</a></h5>
                      <p className="card-text" style={{ fontSize: "11px" }}>{article.shortenedDescription.substring(0, 100).concat('...')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )) :
              <div className="mb-3" key={"ziadne_clanky"}>
                <div className="row mb-3 mt-3" style={{ justifyContent: "center" }}>
                  <div className="col-md-8" >

                    <div className="ewq" style={{ textAlign: "center" }}>
                      <p className="card-text" style={{ fontSize: "15px" }}>{!lang ? t('404.noArticles') :"Neboli najdené žiadne články."}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            {renderPagination()}
          </div>
          {/* middle col */}



          {/* right col */}
          <div className="col-md-4" style={{ textAlign: "left" }}>
            <div id="cards_id" className="col-md-12">
              <div>
                <div className="card-body">
                  <h5 id="read-more-title-id" style={{ color: "rgb(182, 182, 182)" }}>{!lang ? t('404.readMoreHeading') : "Prečítajte si ešte"}</h5>
                  {randomArticles.map((article, i) => (
                    <p className="not-found-page-text-id"id={`${article.id}-read-more`} key={article.id}><span style={{ color: "rgb(182, 182, 182)", margin: "0" }}>{i + 1}</span>. <a style={{ textDecoration: "none", color: "#6d6d6d" }} href={`/article?articleId=${article.id}`}>{article.title}</a></p>
                  ))}
                </div>
              </div>
            </div>
            {/* <hr />
            <div id="most_viewed_id" className="col-md-12 mt-3">
              <div>
                <div className="card-body">
                  <h5 id="most-read-title-id"style={{ color: "#55B9CB" }}>Najčítanejšie články</h5>
                  {mostReadArticles.map((article, i) => (
                    <p id={`${article.id}-most-read`}key={article.id}><span style={{ color: "#55B9CB", margin: "0" }}>{i + 1}</span>. <a style={{ textDecoration: "none" }} href={`/article?articleId=${article.id}`}><span style={{ color: "#6d6d6d" }}> {article.title} ({article.viewsCount})</span></a></p>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotFound;