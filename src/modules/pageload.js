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

const appendElementToParent = (child, parent) => {
    parent.appendChild(child);
}

const generateBasicHtmlStructure = () => {
    
    let divHeader = createElement("header");
    appendElementToParent(divHeader, rootElement);    
    
    buildHeader(divHeader);

    let divContainer = createElement("main");
    appendElementToParent(divContainer, rootElement);

    let divFooter = createElement("footer");
    appendElementToParent(divFooter, rootElement);    

}

const buildHeader = (divHeader) => {

    let divHeaderLogo = createElement("div", "header-logo");
    appendElementToParent(divHeaderLogo, divHeader);

    let divHeaderLogoText = createElement("div", "header-logo-text");
    divHeaderLogoText.textContent = "Awesome Restaurant";
    appendElementToParent(divHeaderLogoText, divHeaderLogo);

    let divHeaderMenu = createElement("nav", "header-nav");
    appendElementToParent(divHeaderMenu, divHeader);

    appendElementToParent(buildHeaderNavMenu(), divHeaderMenu);
    
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
}

export { createElement, appendElementToParent, pageLoad };