import { createElement } from './pageload';
import MenuImg from '../images/menu.jpg';

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
    divMenuHeroHeading.textContent = "Our Menu";
    divMenuHeroImg.appendChild(divMenuHeroHeading);
    return divMenuHeroImg;
}

const createMenuSection = () => {

    let divMenuSection = createElement("div", "menu-section");

    let divMenuContainer = createElement("div", "menu-container");
    divMenuSection.appendChild(divMenuContainer);

    let divMenuContainerCardStarters = createDivMenuContainerCard("Starters", ["Goat Cheese Salad", "Tuscan Garden Salad", "Homemade Vegan Burger"]);
    divMenuContainer.appendChild(divMenuContainerCardStarters);

    let divMenuContainerCardMain = createDivMenuContainerCard("Mains", ["Salmon with Lemon and Butter Sauce", "Baby Rack of Lamb", "Grilled Chicken with Tomatoes"]);
    divMenuContainer.appendChild(divMenuContainerCardMain);
    
    let divMenuContainerCardDesserts = createDivMenuContainerCard("Desserts", ["White Chocolate Cheesecake", "Passion Fruit Cake"]);
    divMenuContainer.appendChild(divMenuContainerCardDesserts);

    let divMenuContainerCardDrinks = createDivMenuContainerCard("Drinks", ["Mojito", "Margarita", "Mimosa"]);
    divMenuContainer.appendChild(divMenuContainerCardDrinks);

    return divMenuSection;

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
        const divMenuCardContentListItem = createElement("li", "menu-card-list-item")        
        divMenuCardContentListItem.textContent = item;
        divMenuCardContentList.appendChild(divMenuCardContentListItem);
    })
    
    return divMenuCardContentList;
}

export { menuContent };
