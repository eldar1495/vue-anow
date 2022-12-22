import { createRouter, createWebHistory} from "vue-router";
import Auth from './components/Auth.vue';
import Home from './components/Home.vue';
import Demos from './components/Demos.vue';
import AboutUs from './components/AboutUs.vue';
import Portfolio from './components/Portfolio.vue';
import Team from './components/Team.vue';
import News from './components/News.vue';
import Contact from './components/Contact.vue';
// import Other from './components/Other.vue';




export default createRouter({
    history: createWebHistory(),
    routes:[
         {path: '/', component:Auth},
         {path: '/home', component:Home},
         {path: '/demos', component:Demos},
         {path: '/about', component:AboutUs},
        {path: '/portfolio', component:Portfolio},
        {path: '/team', component:Team},
        {path: '/news', component:News},
        {path: '/contact', component:Contact},
        //{path: '/other', component:Other},

    ]
})