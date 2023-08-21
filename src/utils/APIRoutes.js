const host = 'https://eu-west-1.aws.data.mongodb-api.com/app/application-0-xeivs/endpoint';

export const sk = 'https://api.open-meteo.com/v1/forecast?latitude=48.15&longitude=17.10&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
export const uk = 'https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
export const en = 'https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=-0.11&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
export const hu = 'https://api.open-meteo.com/v1/forecast?latitude=47.49&longitude=19.04&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
export const pl = 'https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
export const cs = 'https://api.open-meteo.com/v1/forecast?latitude=50.07&longitude=14.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'

export const meniny = `${host}/api/meniny`;

export const getArticles = `${host}/api/allArticles`
export const getSingleArticle = `${host}/api/singleArticle`

export const postArticle = `${host}/api/postArticle`
export const deleteArticle = `${host}/api/deleteArticle`
export const deleteArticlePicture = `${host}/api/deleteArticlePicture`
export const updateArticle = `${host}/api/updateArticle`
export const updateArticlePicture = `${host}/api/updateArticlePicture`

export const getCategories = `${host}/api/getCategories`
export const getLangCategories = `${host}/api/getLangCategories`

export const searchByURL = `${host}/api/searchByURL`

export const getImageById = `${host}/api/getImageById`

export const loginRoute = `${host}/api/loginRoute`
export const registerRoute = `${host}/api/registerRoute`
export const findUser = `${host}/api/findUser`

export const adminDashboard = `${host}/api/adminDashboard`