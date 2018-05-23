import Vue from "vue";
import vueRouter from 'vue-router';
import signin from './demorouterSignin.vue'
import login from './demorouterLogin.vue'
Vue.use(vueRouter);

export default new vueRouter({
    routes:[
        {
            path:'/',
            component:signin
        },
        {
            path:'/signin',
            component:signin
        },
        {
            path:'/login',
            component:login
        }
    ]
})