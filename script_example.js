import { initDataBinding, getElementById, createElement, appendChild, addEventListener } from 'CoreFW/index.js';

document.addEventListener("DOMContentLoaded", function() {
    const dataBinder = initDataBinding('dataElement', 'Initial Data');

    setTimeout(() => {
        dataBinder.updateData('Updated Data');
    }, 2000);

    const button = createElement('button');
    button.textContent = 'Click Me';
    appendChild(document.body, button);

    addEventListener(button, 'click', () => {
        dataBinder.updateData('Button Clicked!');
    });
});
