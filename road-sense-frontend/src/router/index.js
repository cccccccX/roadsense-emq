import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/view/Main.vue";
import FeedBack_Manage from "@/view/pages/FeedBack_Manage.vue";
import First from "@/view/pages/First.vue";
import Manage from "@/view/pages/Manage.vue";
import MyFeedBack from "@/view/pages/MyFeedBack.vue";
import Person from "@/view/pages/Person.vue";
import Repair from "@/view/pages/Repair.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/first',//重定向，
        children: [
            { path: '/first', component: First },//首页
            { path: '/person', component: Person },//个人中心
            { path: '/manage', component: Manage },//坑洼管理
            { path: '/feedback_manage', component: FeedBack_Manage },//反馈管理
            { path: '/repair', component: Repair },//维护记录
            { path: '/myfeedback', component: MyFeedBack}//我的反馈
        ]
    }
];

const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
});

export default router;
