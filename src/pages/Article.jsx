import React, { useEffect, useState } from 'react'
// import '../assets/css/index.css'
import '../assets/css/article.css'
import axios from 'axios'
import { getSingleArticle, getImageById, getArticles } from '../utils/APIRoutes'
import { Helmet } from 'react-helmet-async'
import { getURLParam, queryGet, formatDate, showLoader, hideLoader, isLangSk } from '../assets/js/helpers.js'
import { useTranslation } from "react-i18next";


function Article() {

    const [article, setArticle] = useState({})
    const [articleImage, setArticleImage] = useState()
    const [newestArticles, setNewestArticles] = useState([])
    const [articleBody, setArticleBody] = useState("")
    const [articleHeader, setArticleHeader] = useState("")
    const [articleHeaderTop, setArticleHeaderTop] = useState("")
    const [articleHeaderBottom, setArticleHeaderBottom] = useState("")
    const [moreArticleTitle, setMoreArticleTitle] = useState("")
    const [moreArticles, setMoreArticles] = useState("")
    const [t, i18n] = useTranslation()
    const [lang, setLang] = useState();
    const [name, setName] = useState('')

    let articleId = getURLParam('articleId');

    useEffect(() => {
        showLoader();
        const loadData = async () => {
            let article;
            try {
                article = await queryGet(`${getSingleArticle}?articleId=${articleId}`);
            } catch {
                window.location.href = "/404"
            }

            let articleImage = await axios.post(`${getImageById}?param=medium`, { articleId });
            let newestArticles = await axios.get(`${getArticles}?number=5`, { params: { status: 'Published', demand: 'random' } });
            setArticle(article);
            setArticleImage(articleImage.data.image);
            const fetchedArticles = await Promise.all(
                newestArticles.data.articles.map(async (article) => {
                    const articleId = article.id;
                    const articleImageResponse = await axios.post(`${getImageById}?param=small`, { articleId });
                    const articleImage = articleImageResponse.data.image;
                    return { ...article, image: articleImage };
                })
            );
            setNewestArticles(fetchedArticles);

            const translateAndHideLoader = async () => {

                // if (localStorage.getItem('lang') !== "sk" || !localStorage.getItem("lang")) {
                //     let arr = [];
                //     const article_body = document.getElementById('article_body').innerHTML;
                //     const article_header = document.getElementById('article_header').innerHTML;
                //     const article_header_top = document.getElementById('article_header_top').innerHTML;
                //     const article_header_bottom = document.getElementById('article_header_bottom').innerHTML;
                //     const more_articles_title_id = document.getElementById('more_articles_title_id').innerHTML;

                //     let translated_article_body = await translateContent(article_body);
                //     let translated_article_header = await translateContent(article_header);
                //     let translated_article_header_top = await translateContent(article_header_top);
                //     let translated_article_header_bottom = await translateContent(article_header_bottom);
                //     let translated_more_articles_title_id = await translateContent(more_articles_title_id);

                //     document.getElementById('article_body').innerHTML = translated_article_body;
                //     document.getElementById('article_header').innerHTML = translated_article_header;
                //     document.getElementById('article_header_top').innerHTML = translated_article_header_top;
                //     document.getElementById('article_header_bottom').innerHTML = translated_article_header_bottom;
                //     document.getElementById('more_articles_title_id').innerHTML = translated_more_articles_title_id;

                //     await Promise.all(
                //         newestArticles.data.articles.map(async (article) => {
                //             const more_articles_id = document.getElementById(`${article.id}`).innerHTML;
                //             let translated_more_articles_id = await translateContent(more_articles_id);
                //             document.getElementById(`${article.id}`).innerHTML = translated_more_articles_id;
                //             arr.push(translated_more_articles_id);
                //         })
                //     );

                //     setArticleBody(translated_article_body);
                //     setArticleHeader(translated_article_header);
                //     setArticleHeaderTop(translated_article_header_top);
                //     setArticleHeaderBottom(translated_article_header_bottom);
                //     setMoreArticleTitle(translated_more_articles_title_id);
                //     setMoreArticles(arr);
                // }
                await new Promise((resolve) => setTimeout(resolve, 500));
                hideLoader();
            };
            if (localStorage.getItem("lang") === "sk") {
                if (article.category === "Technológie") {
                    setName("Technológie");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Výskum a vývoj");
                } else {
                    setName("Umelá inteligencia");
                }
            } else if (localStorage.getItem("lang") === "uk") {
                if (article.category === "Technológie") {
                    setName("Технологія");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Дослідження та розробка");
                } else {
                    setName("Штучний інтелект");
                }
            } else if (localStorage.getItem("lang") === "en") {
                if (article.category === "Technológie") {
                    setName("Technology");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Research & Development");
                } else {
                    setName("Artificial intelligence");
                }
            } else if (localStorage.getItem("lang") === "pl") {
                if (article.category === "Technológie") {
                    setName("Technologia");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Badania i rozwój");
                } else {
                    setName("Sztuczna inteligencja");
                }
            } else if (localStorage.getItem("lang") === "hu") {
                if (article.category === "Technológie") {
                    setName("Technológia");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Kutatás és fejlesztés");
                } else {
                    setName("Mesterséges intelligencia");
                }
            } else if (localStorage.getItem("lang") === "cs") {
                if (article.category === "Technológie") {
                    setName("Technologie");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Výzkum a vývoj");
                } else {
                    setName("Umělá inteligence");
                }
            } else {
                if (article.category === "Technológie") {
                    setName("Technológie");
                } else if (article.category === "Výskum a vývoj") {
                    setName("Výskum a vývoj");
                } else {
                    setName("Umelá inteligencia");
                }
            }

            i18n.changeLanguage(localStorage.getItem("lang"))
            let lang = isLangSk();
            setLang(lang)
            setTimeout(translateAndHideLoader, 500);

        };



        loadData();

    }, []);


    return (
        <div id="home" style={{ height: "auto", marginTop: "60px", backgroundColor:  "#0c141b" }}>
            <Helmet>
                <title> {`${article.title ? article.title + "|" : ""} Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023`} </title>
                <meta name="description" content={`${article.shortenedDescription} | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023`}></meta>
                <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
                <link rel="canonical" href={`/article?articleId=${articleId}`}></link>
            </Helmet>
            <div className="container mt-5 mb-5 " style={{ textAlign: 'left' }}>
                <div className="row">
                    <div id="article_header_top" style={{ fontSize: '15px', paddingLeft: '1rem' }}>
                        <a href="/" target="_self" id="home-id-button" style={{ textDecoration: 'none', color: "rgb(182, 182, 182)", fontWeight: "500" }}>{!lang ? t('article.home') : "Domov"}</a>
                        <span style={{ color: "#808080", fontSize: "12px" }}>&nbsp; &gt; &nbsp;</span>
                        <a href={`/${encodeURIComponent(article.category)}`} style={{ textDecoration: 'none', color: "rgb(182, 182, 182)", fontWeight: "500" }} target="_self">{name} </a>
                        <span style={{ color: "#808080", fontSize: "12px" }}>&nbsp;&gt; &nbsp;</span> <span style={{ color: "#808080" }}>{article.title}</span>
                    </div>

                    <div className="col-md-9 pl-0">
                        <img style={{ paddingLeft: '1rem',  marginTop: "15px", objectFit: "cover", width: "100%", height: "600px" }} alt="article" className="mb-5" src={articleImage}></img>
                        <div id="article-body-id"className="container position-relative px-lg-5" style={{paddingLeft: "1rem !important", paddingRight: "0"}}>
                            <div id="article_header" className="post-heading" style={{ textAlign: 'justify' }}>
                                <h1 style={{ textAlign: "left", color: "rgb(182, 182, 182)" }}>{article.title}</h1><br />
                                {/* <span className="meta">
                                    {article.shortenedDescription}
                                </span> */}
                                <div className="row">
                                    <div className="col-md-7">
                                        <span className='box'>{name}</span>
                                        <span className='box-gray'>{!lang ? t('article.fixedBy') : "Upravené"} : ChatGPT-4</span>
                                        <span className='box-second'>{!lang ? t('article.resource') : "Zdroj"}: <a href={article.resource} style={{textDecoration: "none", color: "#808080"}}>&nbsp;nextech.sk</a></span>
                                    </div>
                                    <div className="col-md-5" style={{textAlign: "right"}}>
                                        <div id="article_header_bottom" className='mb-3' style={{ color: "#808080", fontFamily: 'Gilroy-SemiBold', fontSize: '15px', paddingLeft: '3rem' }}>
                                            {!lang ? t('article.addedBy') : "Pridal"} {article.author} {!lang ? t('article.onDay') : "dňa"}  {formatDate(article.date)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article id="article_body" className="mb-4">
                            <div id="article_body_container_id"className="container px-4 px-lg-5" style={{ textAlign: 'justify', fontSize: "19px", marginTop: "5px" }}>
                                <div dangerouslySetInnerHTML={{ __html: `${article.content}` }} />
                                <p className='mt-3'>
                                    
                                </p>
                            </div>
                        </article>

                    </div>
                    <div id="cards_id" className="col-md-3" style={{fontSize: '17px', color: "rgb(182, 182, 182)"}}>
                        <h4 id="more_articles_title_id">{!lang ? t('article.readMoreHeading') : "Prečítajte si ešte"} </h4>
                        {newestArticles.map((article) => (
                            <div className="card mb-3" style={{ width: '100%', backgroundColor: "#111a22" }} key={article.id}>
                                <div id={article.id} className="card-body">
                                    <h5 className="card-title" style={{color: "rgb(182, 182, 182)"}}>{article.title}</h5>
                                    <p className="card-text">{article.shortenedDescription}</p>
                                    <a href={`/article?articleId=${article.id}`} className="btn btn-primary button-read-more">
                                        {!lang ? t('article.readMoreHeadingBtn') : "Prečítaj viac"}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Article