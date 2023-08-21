import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getArticles, getImageById, getLangCategories } from "../utils/APIRoutes";
import '../assets/css/index.css'
import { Helmet } from 'react-helmet-async'
import { getURLParamPage, hideLoader, showLoader, isLangSk, queryGet } from '../assets/js/helpers.js'
import { useTranslation } from "react-i18next";

function Category() {

    let pageName = getURLParamPage();
    const inputRef = useRef(null);

    const [name, setName] = useState('')
    const [articles, setArticles] = useState([]);
    const [randomArticles, setRandomArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    // const [mostReadArticles, setmostReadArticles] = useState([])
    const [, setSearchTerm] = useState('');
    const [categories, setCategories] = useState(null);
    const [lang, setLang] = useState();
    const [t, i18n] = useTranslation()

    const fetchArticleImage = async (articleId) => {
        try {
            const response = await axios.post(`${getImageById}?param=small`, { articleId });
            return response.data.image;
        } catch (error) {
            console.error("Error fetching article image:", error);
            return "";
        }
    };

    const handleSearch = async () => {
        let currentValue = inputRef.current.value;

        fetchArticles(1, 10, 'Published', currentValue)
    };

    const renderPagination = () => {
        const pageNumbers = totalPages;
        const paginationItems = [];

        for (let i = 1; i <= pageNumbers; i++) {
            paginationItems.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className={`page-link ${currentPage === i ? 'pagination-li-button' : 'pagination-li-button-non-active'}`} onClick={() => handlePageChange(i)}>
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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };


    //finish for every language
    const fetchArticles = async (page, itemsPerPage, status, search) => {
        showLoader()
        i18n.changeLanguage(localStorage.getItem("lang"))
        if (localStorage.getItem("lang") === "sk") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Technológie");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Výskum a vývoj");
            } else {
                setName("Umelá inteligencia");
            }
        } else if (localStorage.getItem("lang") === "uk") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Технологія");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Дослідження та розробка");
            } else {
                setName("Штучний інтелект");
            }
        } else if (localStorage.getItem("lang") === "en") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Technology");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Research & Development");
            } else {
                setName("Artificial intelligence");
            }
        } else if (localStorage.getItem("lang") === "pl") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Technologia");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Badania i rozwój");
            } else {
                setName("Sztuczna inteligencja");
            }
        } else if (localStorage.getItem("lang") === "hu") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Technológia");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Kutatás és fejlesztés");
            } else {
                setName("Mesterséges intelligencia");
            }
        } else if (localStorage.getItem("lang") === "cs") {
            if (pageName === "Technol%C3%B3gie") {
                setName("Technologie");
            } else if (pageName === "V%C3%BDskum%20a%20v%C3%BDvoj") {
                setName("Výzkum a vývoj");
            } else {
                setName("Umělá inteligence");
            }
        } else {
            if (pageName === "Technológie") {
                setName("Technológie");
            } else if (pageName === "Výskum a vývoj") {
                setName("Výskum a vývoj");
            } else {
                setName("Umelá inteligencia");
            }
        }

        try {
            const articlesByCategory = await axios.get(getArticles, {
                params: { page, itemsPerPage, status, search, category: decodeURI(pageName) },
            });

            const articlesWithImages = await Promise.all(
                articlesByCategory.data.articles.map(async (article) => {
                    const image = await fetchArticleImage(article.id);
                    return { ...article, image };
                })
            );

            let fetchedRandomArticles = await axios.get(`${getArticles}?number=11`, { params: { status: "Published", demand: 'random', number: "11" } })
            // let mostReadArticles = await axios.get(`${getArticles}`, { params: { status: "Published", demand: 'sortasc', number: "10" } })
            let categories = await queryGet(`${getLangCategories}?language=${localStorage.getItem("lang") ? localStorage.getItem("lang") : "sk"}`);
            let lang = isLangSk();

            setLang(lang)
            setRandomArticles(fetchedRandomArticles.data.articles)
            // setmostReadArticles(mostReadArticles.data.articles)
            setCategories(categories)
            setArticles(articlesWithImages);
            setTotalPages(articlesByCategory.data.totalPages);
            setCurrentPage(page)

        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    const categoriesSlovak = {
        "Technology": "Technológie",
        "Technológie": "Technológie",
        "Technologia": "Technológie",
        "Technologie": "Technológie",
        "Технологія": "Technológie",
        "Technológia": "Technológie",
        "Research & Development": "Výskum a vývoj",
        "Výskum a vývoj": "Výskum a vývoj",
        "Badania i rozwój": "Výskum a vývoj",
        "Výzkum a vývoj": "Výskum a vývoj",
        "Дослідження та розробка": "Výskum a vývoj",
        "Kutatás és fejlesztés": "Výskum a vývoj",
        "Artificial intelligence": "A.I.",
        "Umelá inteligencia": "A.I.",
        "Sztuczna inteligencja": "A.I.",
        "Umělá inteligence": "A.I.",
        "Штучний інтелект": "A.I.",
        "Mesterséges intelligencia": "A.I.",
    }

    useEffect(() => {
        fetchArticles(currentPage);
    }, [pageName]);

    useEffect(() => {
        // if (localStorage.getItem('lang') !== "sk" || !localStorage.getItem("lang")) {
        //     if (randomArticles.length > 0) {
        //         const translateAndHideLoader = async () => {
        //             let arrReadMore = [];
        //             let arrMostReadA = []
        //             let isPromisesCompleted = false;

        //             const title = document.getElementById("title-id").innerHTML;
        //             const categories_id = document.getElementById("categories_id").innerHTML;

        //             let noArticles = document.getElementById("no-articles-id")
        //             let translated_categories_id = await translateContent(categories_id);
        //             document.getElementById("categories_id").innerHTML = translated_categories_id;

        //             if (noArticles) {
        //                 const noArticlesText = document.getElementById("no-articles-id").innerHTML;
        //                 let translatedNoArticlesText = await translateContent(noArticlesText);
        //                 document.getElementById("no-articles-id").innerHTML = translatedNoArticlesText;
        //             }
        //             const readMoreTitle = document.getElementById("read-more-title-id").innerHTML;
        //             // const mostReadTitle = document.getElementById("most-read-title-id").innerHTML;

        //             let translatedReadMore = await translateContent(title);

        //             let translatedReadMoreTitle = await translateContent(readMoreTitle);
        //             // let translatedMostRead = await translateContent(mostReadTitle);

        //             document.getElementById("title-id").innerHTML = translatedReadMore;

        //             document.getElementById("read-more-title-id").innerHTML = translatedReadMoreTitle;
        //             // document.getElementById("most-read-title-id").innerHTML = translatedMostRead;

        //             await Promise.all(
        //                 randomArticles.map(async (article) => {
        //                     const more_articles_id = document.getElementById(`${article.id}-read-more`).innerHTML;
        //                     let translated_more_articles_id = await translateContent(more_articles_id);
        //                     document.getElementById(`${article.id}-read-more`).innerHTML = translated_more_articles_id;
        //                     arrReadMore.push(translated_more_articles_id);
        //                     isPromisesCompleted = false;
        //                 })
        //             )
        //                 // .then(async () => {
        //                 //     await Promise.all(
        //                 //         mostReadArticles.map(async (article) => {
        //                 //             const more_articles_id = document.getElementById(`${article.id}-most-read`).innerHTML;
        //                 //             let translated_more_articles_id = await translateContent(more_articles_id);
        //                 //             document.getElementById(`${article.id}-most-read`).innerHTML = translated_more_articles_id;
        //                 //             arrMostReadA.push(translated_more_articles_id);
        //                 //             isPromisesCompleted = false;
        //                 //         }))
        //                 // })
        //                 .then(async () => {
        //                     if (articles.length !== 0) {
        //                         await Promise.all(
        //                             articles.map(async (article) => {
        //                                 const more_articles_id = document.getElementById(`${article.id}`).innerHTML;
        //                                 let translated_more_articles_id = await translateContent(more_articles_id);
        //                                 document.getElementById(`${article.id}`).innerHTML = translated_more_articles_id;
        //                                 arrMostReadA.push(translated_more_articles_id);
        //                                 isPromisesCompleted = false;
        //                             }))
        //                     }
        //                 }).then(() => {
        //                     isPromisesCompleted = true;
        //                 });

        //             setTranslatedReadMoreArticles(arrReadMore);
        //             // setTranslatedMostReadArticles(arrReadMore);

        //             if (isPromisesCompleted) {
        //                 hideLoader();
        //             }
        //         }
        //         setTimeout(translateAndHideLoader, 1500);
        //     }
        // } else {
        setTimeout(hideLoader, 500);
        // }
    }, [randomArticles])

    return (
        <div style={{marginTop: "5%", backgroundColor: "#0c141b"}}>
            <Helmet>
                <title>{`${decodeURI(pageName)} Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023`}</title>
                <meta name="description" content={`Strana Spravodlivosť. Kategória - ${decodeURI(pageName)} | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023`}></meta>
                <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
                <link rel="canonical" href={`/${decodeURI(pageName)}`}></link>
            </Helmet>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="offset-md-2 col-md-6">
                        <h1 style={{color: "rgb(182 182 182)"}} id="title-id">{name}</h1>
                        <div className="input-group rounded mb-4">
                            <input
                                type="search"
                                className="form-control rounded"
                                placeholder={`${!lang ? t('category.searchPlaceholder') : "Vyhľadávanie"}`}
                                aria-label="Search"
                                aria-describedby="search-addon"
                                ref={inputRef}
                                onSubmit={(e) => {
                                    setSearchTerm(e.target.value);
                                    handleSearch();
                                }}
                                onKeyDown={handleKeyDown}
                            />
                            <button id="search-button" type="button" onClick={handleSearch} className="btn btn-primary border-0"><i className="fas fa-search" /></button>
                        </div>
                        {articles.length !== 0 ? articles.map((article) => (
                            <div key={article.id} className="mb-3" style={{ display: 'flex' }} >
                                <div className="row">
                                    <div className="col-md-4" style={{ minHeight: 0, minWidth: "195" }}>

                                        <img className="qwe" style={{ height: '100px', width: "100%", objectFit: 'cover', flex: '0 0 auto' }} src={article.image} alt="article_image" />
                                    </div>
                                    <div id={article.id} className="col-md-8" >

                                        <div className="ewq" style={{ flex: '1 1 auto', textAlign: "left" }}>
                                            <h5 className="card-title"><a style={{ textDecoration: "none", color: "rgb(182 182 182)", fontSize: "17px" }} href={`/article?articleId=${article.id}`}>{article.title.substring(0, 40).concat('...')}</a></h5>
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
                                            <p id="no-articles-id" className="card-text" style={{ fontSize: "15px" }}>{!lang ? t('category.notFound') : "Neboli najdené žiadne články."}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {renderPagination()}
                    </div>
                    <div className="col-md-4" style={{ textAlign: "left" }}>


                        <div id="categories_id" className="col-md-12 mt-3">
                            <div>
                                <div className="card-body">
                                    <h5 id="categories-id" style={{ color: "rgb(182 182 182)" }}>{!lang ? t('category.categoriesHeader') : "Kategórie"}</h5>
                                    {categories && categories.map((article, i) => (
                                        <p id={`${article.id}-categories`} key={article.title[0].value}>
                                            <span style={{ color: "rgb(182 182 182)", margin: "0" }}>{i + 1}</span>.
                                            <a className="list-items-hover"style={{ textDecoration: "none", color: "#6d6d6d" }} href={`/${encodeURIComponent(categoriesSlovak[article.title[0].value])}`}>
                                                {article.title[0].value}</a>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div id="cards_id" className="col-md-12">
                            <div>
                                <div className="card-body">
                                    <h5 id="read-more-title-id" style={{ color: "rgb(182 182 182)" }}>{!lang ? t('category.readMoreHeader') : "Prečítajte si ešte"}</h5>
                                    {randomArticles.map((article, i) => (
                                        <p id={`${article.id}-read-more`} key={article.id}><span style={{ color: "rgb(182 182 182)", margin: "0" }}>{i + 1}</span>. <a className="list-items-hover" style={{ textDecoration: "none", color: "#6d6d6d" }} href={`/article?articleId=${article.id}`}>{article.title}</a></p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/*<div id="most_viewed_id" className="col-md-12 mt-3">
                            <div>
                                <div className="card-body">
                                    <h5 id="most-read-title-id" style={{ color: "#55B9CB" }}>Najčítanejšie články</h5>
                                    {mostReadArticles.map((article, i) => (
                                        <p id={`${article.id}-most-read`} key={article.id}><span style={{ color: "#55B9CB", margin: "0" }}>{i + 1}</span>. <a style={{ textDecoration: "none" }} href={`/article?articleId=${article.id}`}><span style={{ color: "#6d6d6d" }}> {article.title} ({article.viewsCount})</span></a></p>
                                    ))}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category