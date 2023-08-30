import { createElement, appendElementToParent } from "./pageload";

const menu_2 = () => {
    let innerDiv = createElement("div");
    innerDiv.textContent = "Menu 2 Content Here";
    return innerDiv;
}


export { menu_2 };
