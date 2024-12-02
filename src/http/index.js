import axios from "axios"

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $hostCart = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


const authInterseptor = config => {
    //config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3018/'
    //config.headers['Access-Control-Allow-Methods'] = 'POST'
    config.headers.post['Content-Type'] = "application/form-data"
    return config
}

//$host.interceptors.request.use(authInterseptor)

$hostCart.interceptors.request.use()

export {
    $host,
    $hostCart
}