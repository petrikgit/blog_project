import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import TopBar from "../../components/topbar";
import { useNavigate } from 'react-router-dom';
import { hideLoader, showLoader } from '../../assets/js/helpers.js';
import { Helmet } from 'react-helmet-async'
import { adminDashboard } from '../../utils/APIRoutes'
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate()

  function getProgressBarColor(percentage) {
    if (percentage <= 20) {
      return 'bg-success';
    } else if (percentage <= 40) {
      return 'bg-warning';
    } else if (percentage <= 60) {
      return 'bg-warning';
    } else if (percentage <= 80) {
      return 'bg-danger';
    } else {
      return 'bg-danger';
    }
  }

  const [totalArticles, setTotalArticles] = useState();
  const [totalDraftedArticles, setTotalDraftedArticles] = useState();
  const [totalPublishedArticles, setTotalPublishedArticles] = useState();
  const [totalDeletedArticles, setTotalDeletedArticles] = useState();
  const [articlesPercentage, setArticlesPercentage] = useState();
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    showLoader()
    let user = localStorage.getItem('admin')

    if (!user) {
      navigate('/admin')
    }
    hideLoader()
  }, [])

  useEffect(() => {
    const loadData = async () => {

      const res = await axios.get(adminDashboard);

      setTotalArticles(res.data.allArticles)
      setTotalDraftedArticles(res.data.draftedArticles)
      setTotalPublishedArticles(res.data.publishedArticles)
      setTotalDeletedArticles(res.data.deletedArticles)
      setArticlesPercentage(res.data.categoryPercentages)
      setParagraph(res.data.info.info)
    }

    loadData();
  }, [])


  return (
    <div id="wrapper">
      <Helmet>
        <title>Administration Dashboard | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta name="description" content="Administration dashboard spravodlivosť. | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/admin_dashboard`}></link>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center" style={{ marginLeft: "3px", marginRight: "3px" }}>
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Articles
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalArticles}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-file fa-2x text-gray-300"></i>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center" style={{ marginLeft: "3px", marginRight: "3px" }}>
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Drafted Articles
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalDraftedArticles}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-exclamation fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center" style={{ marginLeft: "3px", marginRight: "3px" }}>
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Published Articles
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalPublishedArticles}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-eye fa-2x text-gray-300" style={{ color: "red !important" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center" style={{ marginLeft: "3px", marginRight: "3px" }}>
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Deleted Articles
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{totalDeletedArticles}</div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-trash fa-2x text-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Chart lorem
                    </h6>
                    <div className="dropdown no-arrow">
                      <a
                        className="dropdown-toggle"
                        href=""
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="">
                          Action
                        </a>
                        <a className="dropdown-item" href="">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <canvas id="myAreaChart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Information
                    </h6>
                    <div className="dropdown no-arrow">
                      <a
                        className="dropdown-toggle"
                        href=""
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="">
                          Action
                        </a>
                        <a className="dropdown-item" href="">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="chart-pie pt-4 pb-2">
                      <canvas id="myPieChart" />
                    </div>

                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-gray-800">
                      Percentage of Articles by Category
                    </h6>
                  </div>
                  <div className="card-body">
                    {articlesPercentage ? articlesPercentage.map((categoryPercentage, index) => (
                      <div key={index}>
                        <h4 className="small font-weight-bold">
                          {categoryPercentage.category}
                          <span className="float-right">{Math.ceil(categoryPercentage.percentage)}%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className={`progress-bar ${getProgressBarColor(categoryPercentage.percentage)}`}
                            role="progressbar"
                            style={{ width: `${categoryPercentage.percentage}%` }}
                            aria-valuenow={categoryPercentage.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    )) : ""}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-gray-800">
                      Information
                    </h6>
                    {/* <div className="dropdown no-arrow">
                      <a
                        className="dropdown-toggle"
                        href=""
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="">
                          Action
                        </a>
                        <a className="dropdown-item" href="">
                          Another action
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="">
                          Something else here
                        </a>
                      </div>
                    </div> */}
                  </div>
                  <div className="card-body" >
                    <div className="chart-area" style={{height: "auto"}}>
                      <p id="myAreaChart text-muted" style={{ height: "auto", whiteSpace: "pre-line" }} className="text-secondary">{paragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;
