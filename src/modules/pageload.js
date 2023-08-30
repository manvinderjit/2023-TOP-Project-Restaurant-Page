import { homeContent } from "./home";

const rootElement = document.body;
const navMenuItems = ['Home', 'Menu', 'Contact Us'];

const createElement = (element, className, id) => {
    let newElement = document.createElement(element);    
    
    if(id) {
        newElement.id = id;
    }
    if(className) {
        newElement.classList.add(className);
    }
    return newElement;
}

const generateBasicHtmlStructure = () => {
    
    let divHeader = createElement("header");
    rootElement.appendChild(divHeader);    
    
    buildHeader(divHeader);

    let mainContainer = createElement("main");
    rootElement.appendChild(mainContainer);    

    let divFooter = createElement("footer");
    divFooter.textContent = `Copright @ Awesome Restuarant by Manvinderjit`;
    rootElement.appendChild(divFooter);    
}

const buildHeader = (divHeader) => {

    let divHeaderMenu = createElement("nav", "header-nav");
    divHeader.appendChild(divHeaderMenu);    
    divHeaderMenu.appendChild(buildHeaderNavMenu());    

}

const buildHeaderNavMenu = () => {

    let navWrapper = createElement("ul");
    navMenuItems.forEach((item) => {
        let navMenuItemId = item.replace(/\s+/g, '-').toLowerCase();
        let navMenuItem = createElement("li", "navMenuItem", navMenuItemId)
        navMenuItem.textContent = item;
        navWrapper.appendChild(navMenuItem);
    })
    return navWrapper;    
}

const buildFooterAttributionsList = () => {

    let content = `<a href="https://www.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_7810365.htm#query=restaurant&position=49&from_view=search&track=sph">Image by wirestock</a> on Freepik`;

    // https://icons8.com/icon/37113/restaurant-table
    // <a target="_blank" href="https://icons8.com/icon/zWddXTfH7ZRf/restaurant">Dine</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    return content;

}

const pageLoad = () => {   
    
    generateBasicHtmlStructure();
    homeContent();
}

export { createElement, pageLoad };