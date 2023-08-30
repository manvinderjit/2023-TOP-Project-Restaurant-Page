import { createElement, appendElementToParent } from "./pageload";

const menu_1 = () => {
    let innerDiv = createElement("div");
    innerDiv.textContent = "Menu 1 Content Here";
    return innerDiv;
}


export { menu_1 };
