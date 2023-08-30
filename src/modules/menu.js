import { createElement, appendElementToParent } from "./pageload";

const menuContent = () => {
    let mainElement = document.querySelector('main');
    mainElement.textContent = "";    

    let innerDiv = createElement("div");
    innerDiv.textContent = "Menu Content Here";
    mainElement.appendChild(innerDiv);
}


export { menuContent };
