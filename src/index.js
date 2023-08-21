import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';
import './i18next.js'

// const lang = localStorage.getItem('lang') || 'sk'
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'sk'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <Suspense fallback={(<div>Loading</div>)}>
            <App />
        </Suspense>
    </HelmetProvider>
);
