import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/image",
        alias: "/image",
        name: "ImageGet",
        component: () => import("./components/Image")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
