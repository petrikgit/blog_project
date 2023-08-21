import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Articles from './pages/Articles.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import Article from './pages/Article.jsx';
import ListArticles from './pages/admin/ListArticles.jsx';
import Charts from './pages/admin/Charts.jsx';
import Category from './pages/Category.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx'
import {queryGet } from './assets/js/helpers.js';
import { getCategories } from './utils/APIRoutes.js';
import Modal from 'react-modal';
import AboutUsComponent from './pages/AboutSection.jsx';
import OchranaUdajovComponent from './pages/OchranaUdajov.jsx';
import ContactsComponent from './pages/Contacts.jsx';
import VolebnyProgram from './pages/VolebnyProgram.jsx';
import UISchool from './pages/UISchool.jsx';
import UIFinance from './pages/UIFinance.jsx';
import UIHealthCare from './pages/UIHealthCare.jsx';
import UISport from './pages/UISport.jsx';
import MandatoryInfoComponent from './pages/MandatoryInfo.jsx';
import './assets/css/index.css'
import DocumentDoComponent from './pages/DocumentDo.jsx';
import DocumentOdComponent from './pages/DocumentOd.jsx';
import { ClipLoader } from 'react-spinners';
import NotFound from './pages/404.jsx';
import axios from 'axios';

Modal.setAppElement('#root');


function App() {
  const [categories, setCategories] = useState([]);
  const [loading] = useState(true);
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "9999" };


  let adminPage = window.location.href.indexOf('admin') > -1;
  let dashboardPage = window.location.href.indexOf('dashboard') > -1;

  useEffect(() => {
    const loadData = async () => {
      let categories = await queryGet(getCategories);
      setCategories(categories);
    };

    if (categories.length === 0) {
      loadData();
    }
  }, [categories]);


  if (categories.length === 0) {
    return null;
  }

  return (
    <Router>
      <div id="page-loader-id" style={{ height: '100%', width: '100%', zIndex: "9999", background:  "rgb(255 255 255)", left: 0, right: 0, position: "fixed"}}>
        <div style={style}>
          <ClipLoader
            display="none"
            color={"#111a22"}
            loading={loading}
            alignitems={'center'}
            justifycontent={'center'}
            flex={1}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>

      <div id='page-container' style={{height: "100vh"}}>
        {adminPage !== true && dashboardPage !== true ? <Header /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Articles />} />
          <Route path="/admin_dashboard" element={<Dashboard />} />
          <Route path="/admin_list_articles" element={<ListArticles />} />
          <Route path="/admin_charts" element={<Charts />} />
          <Route path="/article" element={<Article />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/admin" element={<Login />} />
          {categories ?
            categories.map(item => {
              return <Route key={item._id} path={`/${item.title}`} element={<Category title={item.title} />} />
            })
            : null}
          <Route path="/kontakty" element={<ContactsComponent />} />
          <Route path="/program" element={<VolebnyProgram />} />
          <Route path="/school" element={<UISchool />} />
          <Route path="/finance" element={<UIFinance />} />
          <Route path="/healthcare" element={<UIHealthCare />} />
          <Route path="/sport" element={<UISport />} />
          <Route path="/about" element={<AboutUsComponent />} />
          <Route path="/ochrana" element={<OchranaUdajovComponent />} />
          <Route path="/povinne-info" element={<MandatoryInfoComponent />} />
          <Route path="/povinne-info/document-do" element={<DocumentDoComponent />} />
          <Route path="/povinne-info/document-od" element={<DocumentOdComponent />} />
        </Routes>
        {adminPage !== true && dashboardPage !== true ? <Footer /> : null}
      </div>
    </Router>
  );
}

export default App;

