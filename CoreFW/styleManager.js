function createStyleElement(styles) {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    return styleElement;
}

function applyStyles(element, styles) {
    const styleElement = createStyleElement(styles);
    element.appendChild(styleElement);
}

function removeStyles(element) {
    const styleElements = element.querySelectorAll('style');
    styleElements.forEach(styleElement => element.removeChild(styleElement));
}

export { applyStyles, removeStyles };
