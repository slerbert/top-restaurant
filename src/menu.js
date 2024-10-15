import { contentDiv, createHtmlElement } from "./index.js";

class MenuItem {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    getHtmlElement() {
        const item = createHtmlElement("div", "", "menu-item");
        const title = createHtmlElement("h3", this.name, "title");
        const desc = createHtmlElement("div", this.description, "description");

        item.appendChild(title);
        item.appendChild(desc);

        return item;
    }
}

export const renderMenu = function() {
    const menu = createHtmlElement("div", "", "menu");
    const header = createHtmlElement("h2", "Our Menu");
    menu.appendChild(header);

    const menuElements = [];

    const menuItem1 = new MenuItem(
        "Heritage Pork Bangers & Silken Yukon Purée",
        "Exquisite sausages, handcrafted by fifth-generation charcutiers, nestled atop a velvety bed of sustainably, hand-whipped Yukon Gold potatoes. Finished with an opulent drizzle of balsamic-lavender reduction and a whisper of foraged woodland herbs."
    );

    const menuItem2 = new MenuItem(
        "Crispy Chicken Schnitzel à la Panache",
        "An artisanal chicken cutlet, pounded to the precise millimeter for optimum tenderness, encased in a golden crust of Panko breadcrumbs, seasoned with Himalayan volcanic salt and kissed by a rarefied dash of saffron-infused oil. Served alongside a trio of microgreens personally inspected by our chef."
    );

    const menuItem3 = new MenuItem(
        "Angus Ribeye with Root Vegetable Mélange",
        "A symphonic 28-day dry-aged ribeye, sourced from an award-winning Highland cattle farm, flame-seared and adorned with a hand-carved array of seasonal root vegetables, each roasted to peak caramelization. Accompanied by a truffle-oil foam and a whisper of aged Modena balsamic vapors."
    );

    menuElements.push(menuItem1.getHtmlElement());
    menuElements.push(menuItem2.getHtmlElement());
    menuElements.push(menuItem3.getHtmlElement());

    menuElements.forEach(a => menu.appendChild(a));
    
    contentDiv.appendChild(menu);
};