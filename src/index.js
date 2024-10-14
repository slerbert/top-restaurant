import "./assets/css/styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";

const contentDiv = document.querySelector("#content");
const navQuery = document.querySelector("nav");

const createHtmlElement = (tag, textContent, className, id) => {
    const el = document.createElement(tag);

    if (textContent) el.textContent = textContent;
    if (className) el.classList.add(className);
    if (id) el.id = id;
    
    return el;
};

navQuery.addEventListener("click", (e) => {
    const id = e.target.id;

    if (id) {
        contentDiv.replaceChildren();
        if (id === "home") renderHome();
        if (id === "menu") renderMenu();
        // if (id === "about") renderAbout();
        // if (id === "reservation") renderReservation();
    }
});

renderHome();

export { contentDiv, createHtmlElement };