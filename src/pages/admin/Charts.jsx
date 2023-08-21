import Sidebar from '../../components/sidebar'
import TopBar from "../../components/topbar";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { hideLoader, showLoader } from '../../assets/js/helpers.js';
import { Helmet } from 'react-helmet-async'

const Charts = () => {
    const navigate = useNavigate()

    useEffect(() => {
        showLoader()
        let user = localStorage.getItem('admin')

        if (!user) {
            navigate('/admin')
        }
        hideLoader()
    }, [])

    return (
        <div id="wrapper">
            <Helmet>
                <title>Admin Charts Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
                <meta name="description" content="Administration charts | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
                <link rel="canonical" href={`/admin_charts`}></link>
                <meta name="robots" content="noindex" />
            </Helmet>
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <div className="container">
                        Charts
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charts;
