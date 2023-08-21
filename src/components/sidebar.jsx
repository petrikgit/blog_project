
import React, {useState } from 'react'
import '../assets/css/index.css'
import '../assets/css/dashboard.css'
import TransparentLogo from '../assets/img/logo_socha_white.png'

function Sidebar() {
    const [style] = useState('navbar-nav  sidebar sidebar-dark accordion');

    const urlContains = (str) => {
        if (window.location.href.indexOf(str) > -1) {
            return "active";
        }

        return "";
    }

    return (
        <ul
            className={style}
            id="accordionSidebar"
            style={{ backgroundColor: "#252525", marginLeft: "0" }}
        >
            <div style={{ margin: '25px' }}>

                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="/"
                >
                    <img src={TransparentLogo} alt="transparent_logo" style={{ width: "80px", height: '80px' }} />
                </a>
            </div>
            <hr className="sidebar-divider my-0" />
            <li className={`nav-item ${urlContains("dashboard")}`}>
                <a className="nav-link" href="admin_dashboard">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Interface</div>
            <li className={`nav-item ${urlContains("components")}`}>
                <a
                    className="nav-link collapsed"
                    href=""
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    <i className="fas fa-fw fa-cog" />
                    <span>Components</span>
                </a>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    {/* <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">
                            Buttons
                        </a>
                        <a className="collapse-item" href="cards.html">
                            Cards
                        </a>
                    </div> */}
                </div>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href=""
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded="true"
                    aria-controls="collapseUtilities"
                >
                    <i className="fas fa-fw fa-wrench" />
                    <span>Utilities</span>
                </a>
                <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                >
                    {/* <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">
                            Colors
                        </a>
                        <a className="collapse-item" href="utilities-border.html">
                            Borders
                        </a>
                        <a className="collapse-item" href="utilities-animation.html">
                            Animations
                        </a>
                        <a className="collapse-item" href="utilities-other.html">
                            Other
                        </a>
                    </div> */}
                </div>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Addons</div>
            <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href=""
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder" />
                    <span>Pages</span>
                </a>
                <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                >
                    {/* <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="">
                            Login
                        </a>
                        <a className="collapse-item" href="">
                            Register
                        </a>
                        <a className="collapse-item" href="">
                            Forgot Password
                        </a>
                         <div className="collapse-divider" />
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">
                            404 Page
                        </a>
                        <a className="collapse-item" href="blank.html">
                            Blank Page
                        </a> 
                    </div> */}
                </div>
            </li>
            {/* <li className={`nav-item ${urlContains("chart")}`}>
                <a className="nav-link" href="/admin_charts">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Charts</span>
                </a>
            </li> */}
            <li className={`nav-item ${urlContains("articles")}`}>
                <a className="nav-link" href="admin_list_articles">
                    <i className="fas fa-fw fa-table" />
                    <span>Articles</span>
                </a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>

    )
}
export default Sidebar
