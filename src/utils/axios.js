import axios from "axios";
import router from "../router/index";

import { ElLoading } from "element-plus";

let http = axios.create({
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;'
    }
})

let loading,
    requestCount = 0

const showLoading = () => {
    if (requestCount == 0 && !loading) {
        loading = ElLoading.service({
            background: 'rgba(0, 0, 0, 0.7)'
        })
    }

    requestCount ++
}

const hideLoading = () => {
    requestCount --
    if(requestCount === 0) {
        loading.close()
    }
}

http.interceptors.request.use(config => {
    showLoading()
    const token = ''

    token && (config.headers.Authorization = token)

    return config
    
}, error => {
    return Promise.error(error)
})

http.interceptors.response.use(response => {
    hideLoading()
    if (response.status === 200) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response)
    }
     
}, error => {
    if (error.response.status == 401) {
        router.push({path: '/login'})
    } else {
        return Promise.reject(error)
    }
})