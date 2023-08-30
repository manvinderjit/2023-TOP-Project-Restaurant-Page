import { createElement } from "./pageload";
import IconCardOne from '../images/cutlery.png';
import IconCardTwo from '../images/dine.png';
import IconCardThree from '../images/catering.png';
import HeroImg from '../images/hero-img.jpg';

const homeContent = () => {
    let mainElement = document.querySelector('main');
    mainElement.textContent = "";        
    
    let divHomeWrapper = createElement("div", "home-wrapper");
    
    divHomeWrapper.appendChild(createHeroImgSection());     

    divHomeWrapper.appendChild(createHeroContent());
    
    mainElement.appendChild(divHomeWrapper);
}

const createHeroImgSection = () => {

    let divHomeHeroImg = createElement("div", "home-hero-img");
    divHomeHeroImg.style.backgroundImage = `url(${HeroImg})`;
    
    let divHomeHeroHeading = createElement("h1", "home-hero-heading");
    divHomeHeroHeading.textContent = "Awesome Restaurant";
    divHomeHeroImg.appendChild(divHomeHeroHeading);
    return divHomeHeroImg;
}

const createHeroContent = () => {

    let divHomeHeroContent = createElement("div", "home-hero-content");

    let cardOneText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, voluptas debitis dicta aut, laudantium accusamus dolores nostrum delectus ab exercitationem velit aliquam ducimus quis vitae repellat? Beatae atque reiciendis iusto?";

    let divHomeHeroContentCardOne = createHeroCard(cardOneText, IconCardOne, "Authentic Cuisine");  
    divHomeHeroContent.appendChild(divHomeHeroContentCardOne);

    let divHomeHeroContentCardTwo = createHeroCard(cardOneText, IconCardTwo, "Fine Dining");       
    divHomeHeroContent.appendChild(divHomeHeroContentCardTwo);

    let divHomeHeroContentCardThree = createHeroCard(cardOneText, IconCardThree, "Catering");  
    divHomeHeroContent.appendChild(divHomeHeroContentCardThree);

    return divHomeHeroContent;

}

const createHeroCard = (text, imgUrl, headingContent) => {
    
    let divHomeHeroContentCard = createElement("div", "home-hero-content-card");    

    let divCardImg = createElement("img", "hero-card-img");
    divCardImg.src= imgUrl;
    divHomeHeroContentCard.appendChild(divCardImg);

    let divCardHeading = createElement("h2", "hero-card-h2");
    divCardHeading.textContent = headingContent;
    divHomeHeroContentCard.appendChild(divCardHeading);

    let divCardText = createElement("p", "hero-card-text");
    divCardText.textContent = text;
    
    divHomeHeroContentCard.appendChild(divCardText);

    return divHomeHeroContentCard;
}


export { homeContent };
