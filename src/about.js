import { contentDiv, createHtmlElement } from "./index.js";

export const renderAbout = function() {
    const about = createHtmlElement("div", "", "about");
    const header = createHtmlElement("h2", "About Us");
    about.appendChild(header);

    const blurb = [
        createHtmlElement(
            "p",
            `Welcome to SomePub, where we’ve taken your favorite local pub grub and made it as ridiculously fancy as possible. Here, a simple sausage and mash becomes a “gastronomic exploration of heritage pork,” and our fries are “twice-blanched in the tears of angels.” We believe no meal is too humble to be served with a side of over-the-top descriptions and a garnish of wild foraged microgreens (yes, we found them in the back garden).`,
            "blurb",
        ),
        createHtmlElement(
            "p",
            `Don’t let the crystal glassware fool you — we're still your friendly neighborhood pub at heart. You’ll still get a pint, a hearty meal, and probably hear Dave from down the road talking about his garden hose. Just with a little more balsamic glaze. Cheers to making the ordinary absurdly extraordinary!`,
            "blurb"
        )
    ];

    blurb.forEach(a => about.appendChild(a));
    contentDiv.appendChild(about);
};