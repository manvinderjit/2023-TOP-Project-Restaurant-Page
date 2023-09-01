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
    
    const attributionSection = createAttributionSection();
    divHomeWrapper.appendChild(attributionSection);

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


const createAttributionSection = () => {

    const divAttributionSection = createElement("div", "contact-attribution-section");

    const divAttributionSectionHeading = createElement("h2", "contact-attribution-h2");
    divAttributionSectionHeading.textContent = "Attributions:";
    divAttributionSection.appendChild(divAttributionSectionHeading);

    const divAttributionList = createElement("ol", "contact-attribution-list");
    const divAttributionListItemHero = createElement("li", "contact-attribution-list-item");
    divAttributionListItemHero.innerHTML = `Hero Image: <a href="https://www.freepik.com/free-photo/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables_7810365.htm#query=restaurant&position=49&from_view=search&track=sph">Image by wirestock</a> on Freepik.`;
    divAttributionList.appendChild(divAttributionListItemHero);


    const divAttributionListItemIcons = createElement("li", "contact-attribution-list-item");
    divAttributionListItemIcons.innerHTML = `<a href="https://icons8.com">Icons By Icons 8</a>.`;
    divAttributionList.appendChild(divAttributionListItemIcons);
    
    divAttributionSection.appendChild(divAttributionList);
    
    return divAttributionSection;

}


export { homeContent };
