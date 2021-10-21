import Home from './../../components/home/Home.vue';
import About from './../../components/about/About.vue';
import Portfolio from './../../components/portfolio/Portfolio.vue';
import Contact from './../../components/contact/Contact.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/contact', component: Contact }
]