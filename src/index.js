import "./assets/css/styles.css";
import { renderHome } from "./home.js";
console.log("Hello, world!");

const contentDiv = document.querySelector("#content");
const homeButtonQ = document.querySelector("#home");
const menuButtonQ = document.querySelector("#menu");
const aboutButtonQ = document.querySelector("#about");
const reservationButtonQ = document.querySelector("#reservation");

const createHtmlElement = (tag, textContent, className, id) => {
    const el = document.createElement(tag);

    if (textContent) el.textContent = textContent;
    if (className) el.classList.add(className);
    if (id) el.id = id;
    
    return el;
};

homeButtonQ.addEventListener("click", () => {
    contentDiv.replaceChildren();
    renderHome();
});

export { contentDiv, createHtmlElement };