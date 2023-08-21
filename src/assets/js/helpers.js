import axios from 'axios'

export const monthsInSlovak = {
    "január": 1,
    "február": 2,
    "marec": 3,
    "apríl": 4,
    "máj": 5,
    "jún": 6,
    "júl": 7,
    "august": 8,
    "septemer": 9,
    "október": 10,
    "november": 11,
    "december": 12,
}

export const monthsInEnglish = {
    "january": 1,
    "february": 2,
    "march": 3,
    "april": 4,
    "may": 5,
    "jun": 6,
    "july": 7,
    "august": 8,
    "septemer": 9,
    "october": 10,
    "november": 11,
    "december": 12,
}

export const monthsInCzech = {
    "leden": 1,
    "únor": 2,
    "březen": 3,
    "duben": 4,
    "květen": 5,
    "červen": 6,
    "červenec": 7,
    "srpen": 8,
    "září": 9,
    "říjen": 10,
    "listopad": 11,
    "prosinec": 12,
};

export const monthsInPolish = {
    "styczeń": 1,
    "luty": 2,
    "marzec": 3,
    "kwiecień": 4,
    "maj": 5,
    "czerwiec": 6,
    "lipiec": 7,
    "sierpień": 8,
    "wrzesień": 9,
    "październik": 10,
    "listopad": 11,
    "grudzień": 12,
};

export const monthsInUkrainian = {
    "січень": 1,
    "лютий": 2,
    "березень": 3,
    "квітень": 4,
    "травень": 5,
    "червень": 6,
    "липень": 7,
    "серпень": 8,
    "вересень": 9,
    "жовтень": 10,
    "листопад": 11,
    "грудень": 12,
};

export const monthsInHungarian = {
    "január": 1,
    "február": 2,
    "március": 3,
    "április": 4,
    "május": 5,
    "június": 6,
    "július": 7,
    "augusztus": 8,
    "szeptember": 9,
    "október": 10,
    "november": 11,
    "december": 12,
};


export const queryGet = async (url) => {
    let data = await axios.get(url);
    return data.data;
}

export const getURLParamPage = () => {
    var url = window.location.href;
    var path = url.substring(url.indexOf('/') + 2);
    var param = path.substring(path.indexOf('/') + 1);

    return param;
}

export const getURLParam = (string) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(string)

    return product;
}

export const getDate = () => {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return { day: day, month: month, year: year }
}

export const todaysDate = (lang) => {
    let todaysDate = getDate();
    let key;

    if(lang === 'sk' || !lang){
        key = Object.keys(monthsInSlovak).find((key) => monthsInSlovak[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }else if(lang === "en"){
        key = Object.keys(monthsInEnglish).find((key) => monthsInEnglish[key] === todaysDate.month);
        return todaysDate.day + "th" + " of " + key + ", " + todaysDate.year;
    }else if(lang === 'cs'){
        key = Object.keys(monthsInCzech).find((key) => monthsInCzech[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }else if(lang === 'pl'){
        key = Object.keys(monthsInPolish).find((key) => monthsInPolish[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }else if(lang === 'uk'){
        key = Object.keys(monthsInUkrainian).find((key) => monthsInUkrainian[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }else if(lang === 'hu'){
        key = Object.keys(monthsInHungarian).find((key) => monthsInHungarian[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }else{
        key = Object.keys(monthsInSlovak).find((key) => monthsInSlovak[key] === todaysDate.month);
        return todaysDate.day + "." + key + ", " + todaysDate.year;
    }
}

export const todaysNameday = (url) => {
    let date = getDate();

    let keyMonth = Object.keys(url).find((key) => String(key) === String(date.month));
    let objMonth = keyMonth ? url[keyMonth] : null;
    let keyDay = objMonth ? Object.keys(objMonth).find((key) => String(key) === String(date.day)) : null;
    let name = keyDay ? objMonth[keyDay] : null;

    return name;
};


export const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;

    return formattedDate
}

export const hideLoader = () => {
    const loaderEl = document.getElementById('page-loader-id');
    loaderEl.style.display = "none"
    if(document.querySelector("header")){
        document.querySelector("header").style.display = "block";
    }
}

export const showLoader = () => {
    if(document.querySelector("header")){
        document.querySelector("header").style.display = "none";
    }
    const loaderEl = document.getElementById('page-loader-id');
    loaderEl.style.display = "block"
}

export const isLangSk = () =>{
    if(localStorage.getItem("lang") === "sk" || !localStorage.getItem("lang")){
        return true;
    }

    return false;
    
}

