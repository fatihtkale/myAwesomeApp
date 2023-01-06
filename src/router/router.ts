import {createRouter} from "router-vue-native";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    }
];

const router = createRouter(
    {routes},
);

export {
    router
}