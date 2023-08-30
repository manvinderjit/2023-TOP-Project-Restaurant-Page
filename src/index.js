import { pageLoad } from "./modules/pageload";
import './style.css';
import { homeContent } from "./modules/home";
import { menuContent } from "./modules/menu";
import { contactUsContent } from "./modules/contact-us";

pageLoad();

const homeTab = document.getElementById("home");
homeTab.addEventListener('click', () => {
    homeContent();
});

const menuTab = document.getElementById("menu");
menuTab.addEventListener('click', () => {
    menuContent();
});

const contactUsTab = document.getElementById("contact-us");
contactUsTab.addEventListener('click', () => {    
    contactUsContent();
});