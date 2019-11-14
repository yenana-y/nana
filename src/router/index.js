import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
////路由里的
import firstbook from "./firstbook"
import bookshop from "./bookshop"
import sell from "./sell"
import cart from "./cart"
import search from "./search"
import booklist from "./booklist"

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/firstbook"
        },
        firstbook,
        bookshop,
        sell,
        cart,
        search,
        booklist,
        {
            path: "/mine",
            name: "mine",
            meta: {
                flag: true,
                requiredAuth: true
            },
            component: _ => import("../pages/mine")
        },
        {
            path: "/login",
            name: "login",
            component: _ => import("../pages/login"),
            meta: {
                flag: false
            },
        },
        {
            path: "/search",
            name: "search",
            component: _ => import("../pages/search"),
            meta: {
                flag: false
            },
        },
        {
            path: "/booklist",
            name: "booklist",
            component: _ => import("../pages/booklist"),
            meta: {
                flag: false
            },
        }


    ]
})
///全局守卫
router.beforeEach((to, from, next) => {
    if (to.path != "/login" && to.meta.requiredAuth) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next({ name: "login", params: { to: to.path } })
        }
    } else {
        next();
    }
})
export default router;