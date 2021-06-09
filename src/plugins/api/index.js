import axios from 'axios'
import Auth from './resources/auth'
// import Order from './resources/orders'
// import Product from './resources/products'
import Article from './resources/articles'


export default {
    install: (Vue, options) => {
        axios.defaults.baseURL = options.baseURL
        
        Vue.prototype.$api = {
            auth: new Auth(axios),
            // products: new Product(axios),
            articles: new Article(axios),
            // orders: new Order(axios)
        }
    }
}