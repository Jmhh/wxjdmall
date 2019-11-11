import {
    HTTP
} from './http.js'


class API extends HTTP {

    constructor() {
        super()
    }

    // 返回的首页请求的json数据
    getHomepage(sCallback) {
        this.request({
            url: '/api/profiles/homepage',
            success: (data) => {
                // 如果不用箭头函数，this将指代不正确
                sCallback(data)
            }
        })

    }

    // 返回的商品的json数据
    getProductions(sCallback) {
        this.request({
            url: '/api/profiles/productions',
            success: (data) => {
                // 如果不用箭头函数，this将指代不正确
                sCallback(data)
            }
        })
    }

    // 返回的商品列表的json数据
    getProductionsList(sCallback) {
        this.request({
            url: '/api/profiles/productionsList',
            success: (data) => {
                // 如果不用箭头函数，this将指代不正确
                sCallback(data)
            }
        })
    }

    // 返回的商品详情的json数据
    getProductionDetail(sCallback) {
        this.request({
            url: '/api/profiles/productionDetail',
            success: (data) => {
                // 如果不用箭头函数，this将指代不正确
                sCallback(data)
            }
        })
    }
}

export {
    API
}