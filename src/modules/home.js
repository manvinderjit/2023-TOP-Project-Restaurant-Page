import { createElement } from "./pageload";

const homeContent = () => {
    let mainElement = document.querySelector('main');
    mainElement.textContent = "";        
    
    let innerDiv = createElement("div");
    innerDiv.textContent = "Home Content Here";
    mainElement.appendChild(innerDiv);
}


export { homeContent };
