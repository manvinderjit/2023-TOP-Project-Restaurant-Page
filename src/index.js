import { mainContent, pageLoad } from "./modules/pageload";
import './style.css';
import { menu_1 } from "./modules/menu-1";
import { menu_2 } from "./modules/menu-2";

pageLoad();

const menuItems = document.querySelectorAll(".navMenuItem")
// console.log(menuItems);

const getTabContent = (elementID) => {
    if(elementID == "menu-1") {
        return menu_1();
    } else if (elementID == "menu-2"){
        return menu_2();
    } else if (elementID == "menu-2"){
        return menu_2();
    } else {
        return menu_2();
    }
}

menuItems.forEach((element) => {
    element.addEventListener('click' , () => {
        let mainElement = document.querySelector('main');
        mainElement.textContent = "";
        mainElement.appendChild(getTabContent(element.id));        
    })
});

