import { createElement } from './pageload';
import MenuImg from '../images/menu.jpg';

const menuData = {

    "Starters":
        [  
            ["Goat Cheese Salad","$9.99"],
            ["Tuscan Garden Salad","$9.99"],
            ["Homemade Vegan Burger","$9.99"]
        ],
    "Mains":
        [
            ["Salmon with Lemon and Butter Sauce","$9.99"],
            ["Baby Rack of Lamb","$9.99"],
            ["Grilled Chicken with Tomatoes","$9.99"]
        ],
    "Desserts":
        [
            ["White Chocolate Cheesecake","$9.99"],
            ["Passion Fruit Cake","$9.99"]
        ],
    "Drinks":
        [
            ["Mojito","$9.99"],
            ["Margarita","$9.99"],
            ["Mimosa","$9.99"]
        ],   
}

const menuContent = () => {
    
    const mainElement = document.querySelector('main');
    mainElement.textContent = "";    

    const divMenuWrapper = createElement("div", "menu-wrapper");
    divMenuWrapper.appendChild(createHeroImgSection());
    divMenuWrapper.appendChild(createMenuSection());

    mainElement.appendChild(divMenuWrapper);
}

const createHeroImgSection = () => {

    let divMenuHeroImg = createElement("div", "menu-hero-img");
    divMenuHeroImg.style.backgroundImage = `url(${MenuImg})`;
    
    let divMenuHeroHeading = createElement("h1", "menu-hero-heading");
    divMenuHeroHeading.textContent = "Awesome Restaurant's Menu";
    divMenuHeroImg.appendChild(divMenuHeroHeading);
    return divMenuHeroImg;
}

const createMenuSection = () => {

    const divMenuSection = createElement("div", "menu-section");

    const divMenuContainer = createMenuContainerWithContent();
    divMenuSection.appendChild(divMenuContainer);
   
    return divMenuSection;
}

const createMenuContainerWithContent = () => {

    const divMenuContainer = createElement("div", "menu-container");

    for(let menuSections in menuData) {
        const divMenuContainerCard = createDivMenuContainerCard(menuSections, menuData[menuSections]);
        divMenuContainer.appendChild(divMenuContainerCard);      
    }

    return divMenuContainer;
    
}

const createDivMenuContainerCard = (heading, itemsArray) => {
    
    const divMenuContainerCard = createElement("div", "menu-container-card");

    let divMenuCardHeading = createElement("h2", "menu-h2");
    divMenuCardHeading.textContent = heading;
    divMenuContainerCard.appendChild(divMenuCardHeading);

    const divMenuCard = createMenuCardContentList(itemsArray);
    divMenuContainerCard.appendChild(divMenuCard);

    return divMenuContainerCard;

}

const createMenuCardContentList = (itemsArray) => {

    const divMenuCardContentList = createElement("ul", "menu-card-list");
    
    itemsArray.forEach((item) => {

        const divMenuCardContentListItem = createElement("li", "menu-card-list-item");
        
        const divMenuCardContentListItemName = createElement("div", "menu-card-list-item-name");
        divMenuCardContentListItemName.textContent = item[0];
        divMenuCardContentListItem.appendChild(divMenuCardContentListItemName);

        const divMenuCardContentListItemPrice = createElement("div", "menu-card-list-item-price");
        divMenuCardContentListItemPrice.textContent = item[1];
        divMenuCardContentListItem.appendChild(divMenuCardContentListItemPrice);
        
        divMenuCardContentList.appendChild(divMenuCardContentListItem);

    });
    
    return divMenuCardContentList;
}

export { menuContent };
