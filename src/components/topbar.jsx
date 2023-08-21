
import React from 'react'
import '../assets/css/index.css'
import '../assets/css/dashboard.css'
import {useNavigate } from 'react-router-dom';

function TopBar() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        localStorage.removeItem("admin");
          navigate('/');
          window.location.reload(false);
    };

    return (
        
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto" style={{backgroundColor: "transparent"}}>
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                    >
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-light border-0 small"
                                    placeholder="Search for..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                <li className="nav-item dropdown no-arrow mr-5">
                    <a
                        className="nav-link dropdown-toggle"
                        href=""
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            Admin
                        </span>
                        <img
                            alt="admin"
                            className="img-profile rounded-circle"
                            src="img/undraw_profile.svg"
                        />
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in mr-5"
                        aria-labelledby="userDropdown"
                        style={{marginLeft: "-35px"}}
                    >
                        {/* <a className="dropdown-item" href="">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            Profile
                        </a>
                        <a className="dropdown-item" href="">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                            Settings
                        </a>
                        <a className="dropdown-item" href="">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                            Activity Log
                        </a> */}
                        {/* <div className="dropdown-divider" /> */}
                        <a
                            className="dropdown-item"
                            href=""
                            data-toggle="modal"
                            data-target="#logoutModal"
                            onClick={handleSubmit}
                        >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
export default TopBar
