import { contentDiv, createHtmlElement } from "./index.js";

export const renderHome = function() {
    const home = createHtmlElement("div", "", "home");
    const homeElements = [];

    homeElements.push(
        createHtmlElement("p",
            "Welcome to",
            "welcome",
        )
    );

    homeElements.push(
        createHtmlElement(
            "h1",
            "SomePub",
        )
    );

    homeElements.push(
        createHtmlElement(
            "p",
            "Pure Flavors. Timeless Craft. Elevated by Pretension.",
            "tagline",
        )
    );

    homeElements.forEach(a => home.appendChild(a));

    contentDiv.appendChild(home);
};