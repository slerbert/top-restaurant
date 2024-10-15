import { contentDiv, createHtmlElement } from "./index.js";

export const renderReservation = function() {
    const reservation = createHtmlElement("div", "", "reservation");
    const header = createHtmlElement("h2", "Make a Reservation");
    const form = createHtmlElement("form", "", "resForm");
    const fieldset = createHtmlElement("fieldset");

    const minDate = getCurrentDate();
    const minTime = getCurrentTime();
    const timeStep = 60 * 15;
    const closeTime = "23:00";

    createFormElements("resName", "text", "Name:", fieldset);
    createFormElements("resEmail", "email", "Email:", fieldset);
    createFormElements("resDate", "date", "Date:", fieldset, minDate);
    createFormElements("resTime", "time", "Time:", fieldset, minTime, closeTime, timeStep);
    form.appendChild(fieldset);

    const button = createHtmlElement("button", "Submit", "resButton");
    button.type = "button";
    form.appendChild(button);

    reservation.appendChild(header);
    reservation.appendChild(form);
    contentDiv.appendChild(reservation);
};

function getCurrentDate() {
    const d = new Date();

    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getCurrentTime() {
    const d = new Date();

    const result = d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    console.log(result)
    return result;
}

function createFormElements(name, inputType, labelText, parentForm, min, max, step) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.htmlFor = name;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = inputType;
    input.id = name;
    input.name = name;

    if (min) input.min = min;
    if (max) input.max = max;
    if (step) input.step = step;
    
    div.appendChild(label);
    div.appendChild(input);
    label.insertAdjacentHTML("afterend", "<br>");
    input.insertAdjacentHTML("afterend", "<br>");
    parentForm.appendChild(div);
}