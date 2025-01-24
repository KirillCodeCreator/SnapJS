function appendChild(parent, child) {
    parent.appendChild(child);
}

function removeChild(parent, child) {
    parent.removeChild(child);
}

function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}

function getAttribute(element, attribute) {
    return element.getAttribute(attribute);
}

export { appendChild, removeChild, setAttribute, getAttribute };
