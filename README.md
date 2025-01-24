CoreFW is a modular frontend framework written in JavaScript. It provides tools for two-way data binding, event management, DOM manipulation, and style application via CSS-in-JS.

## Modules and methods

### dataBinding.js

This module is responsible for two-way data binding.

#### DataBinder

The DataBinder class binds the DOM element to the data and automatically updates the element's contents when the data changes.

- **constructor(element, data)**
- **element**: The DOM element to which the data will be bound.
  - **data**: Initial data for binding.
  - Initializes the element and data, and calls the 'bindData` method.

- **bindData()**
- Updates the content of the element based on the data.

- **updateData(newData)**
- **newData**: New data to update.
  - Updates the data and calls the `bindData` method to update the content of the element.

### utils.js

This module provides utilities for working with the DOM.

- **getElementById(id)**
- **id**: Element ID.
  - Returns the DOM element by its ID.

- **createElement(tagName)**
- **tagName**: The name of the element tag.
  - Creates a new DOM element with the specified tag.

### eventHandlers.js

This module provides methods for event management.

- **addEventListener(element, event, handler)**
- **element**: DOM element.
  - **event**: The name of the event.
  - **handler**: Event handler.
  - Adds an event handler to the element.

- **removeEventListener(element, event, handler)**
- **element**: DOM element.
  - **event**: The name of the event.
  - **handler**: Event handler.
  - Removes the event handler from the element.

### domManipulation.js

This module provides methods for DOM manipulation.

- **appendChild(parent, child)**
- **parent**: Parent element.
  - **child**: Child element.
  - Adds a child element to the parent element.

- **removeChild(parent, child)**
- **parent**: Parent element.
  - **child**: Child element.
  - Removes a child element from the parent element.

- **setAttribute(element, attribute, value)**
- **element**: DOM element.
  - **attribute**: The name of the attribute.
  - **value**: Attribute value.
  - Sets the attribute value for the element.

- **getAttribute(element, attribute)**
- **element**: DOM element.
  - **attribute**: The name of the attribute.
  - Returns the attribute value for the element.

### styleManager.js

This module provides methods for managing styles via CSS-in-JS.

- **createStyleElement(styles)**
  - **styles**: A string with CSS styles.
  - Creates a `<style>` element with the specified styles.

- **applyStyles(element, styles)**
- **element**: The DOM element to which styles will be applied.
  - **styles**: A string with CSS styles.
  - Applies styles to an element by creating and adding a `<style>` element.

- **removeStyles(element)**
- **element**: The DOM element from which styles will be removed.
  - Removes all `<style>` elements from the specified element.

### index.js

This module exports all methods and classes from other modules for easy use.

- **initDataBinding(elementId, initialData)**
- **elementId**: Element ID.
  - **initialData**: Initial data for binding.
  - Initializes two-way data binding for an element with the specified identifier and initial data.

- **Exported functions**:
- **getElementById**
- **createElement**
- **addEventListener**
  - **removeEventListener**
  - **appendChild**
  - **removeChild**
  - **setAttribute**
  - **getAttribute**
  - **applyStyles**
  - **removeStyles**

## Usage example

### script_example.js

```javascript
import { initDataBinding, getElementById, createElement, appendChild, addEventListener, applyStyles } from 'CoreFW/index.js';

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

    const styles = `
        #dataElement {
            color: blue;
            font-size: 20px;
        }
        button {
            background-color: green;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
        }
    `;

    applyStyles(document.head, styles);
});
