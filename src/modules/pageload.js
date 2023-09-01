import { homeContent } from "./home";

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
    document.body.appendChild(divHeader);    
    
    buildHeader(divHeader);

    let mainContainer = createElement("main");
    document.body.appendChild(mainContainer);    

    let divFooter = createElement("footer");
    divFooter.textContent = `Copright @ Awesome Restuarant by Manvinderjit`;
    document.body.appendChild(divFooter);    
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


const pageLoad = () => {   
    
    generateBasicHtmlStructure();
    homeContent();
}

export { createElement, pageLoad };