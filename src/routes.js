import Orders from './components/Orders.vue'
import Home from './components/PageContent.vue'
import Modify from './components/Modify.vue'


export default[
    { path: '/', component: Home},
    { path: '/orders', component: Orders},
    { path: '/modify', component: Modify, props: true}
]


