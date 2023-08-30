import { createElement, appendElementToParent } from "./pageload";

const contactUsContent = () => {
    let mainElement = document.querySelector('main');
    mainElement.textContent = "";    

    let innerDiv = createElement("div");
    innerDiv.textContent = "Contact Us Content Here";
    mainElement.appendChild(innerDiv);
}


export { contactUsContent };
