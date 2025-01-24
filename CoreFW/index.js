import { DataBinder } from './dataBinding.js';
import { getElementById, createElement } from './utils.js';
import { addEventListener, removeEventListener } from './eventHandlers.js';
import { appendChild, removeChild, setAttribute, getAttribute } from './domManipulation.js';

function initDataBinding(elementId, initialData) {
    const element = getElementById(elementId);
    return new DataBinder(element, initialData);
}

export {
    initDataBinding,
    getElementById,
    createElement,
    addEventListener,
    removeEventListener,
    appendChild,
    removeChild,
    setAttribute,
    getAttribute
};
