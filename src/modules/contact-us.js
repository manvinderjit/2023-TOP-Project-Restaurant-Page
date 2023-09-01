import { createElement } from "./pageload";
import ContactImg from '../images/contact.jpg';

const address = {    
    "Unit": "53515, Jailyn Meadow",
    "City": "Toronto, ON",    
    "Country": "Canada",
    "ZipCode": "83307",
    "Cell": "1-409-316-7483"
}

const contactUsContent = () => {
    const mainElement = document.querySelector('main');
    mainElement.textContent = "";    

    const contactHeroImgSection = createContactHeroImgSection();
    mainElement.appendChild(contactHeroImgSection);
    
    const contactContentSection = createContactContentSection();
    mainElement.appendChild(contactContentSection);

    const attributionSection = createAttributionSection();
    mainElement.appendChild(attributionSection);
}

const createContactHeroImgSection = () => {

    const divContactHeroImg = createElement("div", "contact-hero-img");
    divContactHeroImg.style.backgroundImage = `url(${ContactImg})`;
    
    const divContactHeroHeading = createElement("h1", "contact-hero-heading");
    divContactHeroHeading.textContent = "Awesome Restaurant's Contact";
    divContactHeroImg.appendChild(divContactHeroHeading);

    return divContactHeroImg;
}

const createContactContentSection = () => {
    
    const divContactContentSectionWrapper = createElement("div", "contact-content-wrapper");

    const contactAddressSection = createContactAddressSection();
    divContactContentSectionWrapper.appendChild(contactAddressSection);

    const contactFormSection = createContactFormSection();
    divContactContentSectionWrapper.appendChild(contactFormSection);

    return divContactContentSectionWrapper;
}


const generateAddressContent = () => {
    
    const divAddressContainer = createElement("div", "contact-address-container", "contact-address-container");
    for(const field in address) {
        const divAddressField = createElement("div", "contact-address-field");
        divAddressField.textContent = `${field} : ${address[field]}`;
        divAddressContainer.appendChild(divAddressField);        
    }
    return divAddressContainer;
}

const createContactAddressSection = () => {

    const divContactAddressSection = createElement("div", "contact-address-section");
    
    const divContactAddressSectionHeading = createElement("h2", "contact-address-section-h2");
    divContactAddressSectionHeading.textContent = "Our Location:";
    divContactAddressSection.appendChild(divContactAddressSectionHeading);

    const divContactAddressSectionAddress = generateAddressContent();

    divContactAddressSection.appendChild(divContactAddressSectionAddress);
    
    return divContactAddressSection;
}

const createContactFormSection = () => {
    
    const divContactFormSection = createElement("div", "contact-form-section");

    const formContactForm = createElement("form", "contact-form");
    
    const formContactFormFieldset = createElement("fieldset");
    
    const legendContactFormFieldset = createElement("legend");
    legendContactFormFieldset.textContent = "Send a Query";
    formContactFormFieldset.appendChild(legendContactFormFieldset);

    const listContactFormFieldList = createContactFormFields();
    formContactFormFieldset.appendChild(listContactFormFieldList);

    formContactForm.appendChild(formContactFormFieldset);

    divContactFormSection.appendChild(formContactForm);
    
    return divContactFormSection;

}

const createContactFormFields = () => {

    const listContactFormFieldList = createElement("ul", "contact-form-list");

    const listItemContactFormFirstName = createLabelInputPairListItem("input", "text", "firstname");
    const listItemContactFormLastName = createLabelInputPairListItem("input", "text", "lastname");
    const listItemContactFormPhone = createLabelInputPairListItem("input", "tel", "telephone");
    const listItemContactFormEmail = createLabelInputPairListItem("input", "email", "email");
    const listItemContactFormTextArea = createLabelInputPairListItem("textarea", false, "query");
    
    const listItemSubmitButton = document.createElement("button");    
    listItemSubmitButton.setAttribute("type", "submit");
    listItemSubmitButton.textContent = "Submit Query";

    listContactFormFieldList.appendChild(listItemContactFormFirstName);        
    listContactFormFieldList.appendChild(listItemContactFormLastName);        
    listContactFormFieldList.appendChild(listItemContactFormPhone);
    listContactFormFieldList.appendChild(listItemContactFormEmail);
    listContactFormFieldList.appendChild(listItemContactFormTextArea);
    listContactFormFieldList.appendChild(listItemSubmitButton);

    return listContactFormFieldList;
}

const createLabelInputPairListItem = (inputType, inputHtmlType, inputId) => {

    const listItemContactForm = createElement("li", "contact-form-li");

    const labelContactForm = createElement("label");
    labelContactForm.setAttribute("for", inputId);
    labelContactForm.textContent = inputId.toUpperCase();
    listItemContactForm.appendChild(labelContactForm);

    const inputContactForm = createElement(inputType, "contact-form-input", inputId);
    if(inputHtmlType){
        inputContactForm.setAttribute("type", inputHtmlType);
    }    
    listItemContactForm.appendChild(inputContactForm);

    return listItemContactForm;

}

const createAttributionSection = () => {

    const divAttributionSection = createElement("div", "contact-attribution-section");

    const divAttributionSectionHeading = createElement("h2", "contact-attribution-h2");
    divAttributionSectionHeading.textContent = "Attributions:";
    divAttributionSection.appendChild(divAttributionSectionHeading);

    const divAttributionList = createElement("ol", "contact-attribution-list");
    const divAttributionListItem = createElement("li", "contact-attribution-list-item");
    divAttributionListItem.innerHTML = `Hero Image: Image by <a href="https://www.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_11684257.htm">Freepik</a>`;
    divAttributionList.appendChild(divAttributionListItem);
    divAttributionSection.appendChild(divAttributionList);

    return divAttributionSection;

}

export { contactUsContent };