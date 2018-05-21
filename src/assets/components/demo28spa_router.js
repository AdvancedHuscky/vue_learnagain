import Vue from 'vue';
import Router from 'vue-router'
import sa from './demo28spa_a'
import sb from './demo28spa_b'
import sc from './demo28spa_c'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/a',
            name:'a',
            component:sa
        },
        {
            path:'/b',
            name:'b',
            component:sb
        },
        {
            path:'/c',
            name:'c',
            component:sc
        },
    ]
})