CoreFW — это модульный frontend-framework, написанный на JavaScript. Он предоставляет инструменты для двустороннего связывания данных, управления событиями, манипуляции DOM и применения стилей через CSS-in-JS.

## Модули и методы

### dataBinding.js

Этот модуль отвечает за двустороннее связывание данных.

#### DataBinder

Класс `DataBinder` связывает элемент DOM с данными и автоматически обновляет содержимое элемента при изменении данных.

- **constructor(element, data)**
  - **element**: Элемент DOM, к которому будут привязаны данные.
  - **data**: Начальные данные для привязки.
  - Инициализирует элемент и данные, а также вызывает метод `bindData`.

- **bindData()**
  - Обновляет содержимое элемента на основе данных.

- **updateData(newData)**
  - **newData**: Новые данные для обновления.
  - Обновляет данные и вызывает метод `bindData` для обновления содержимого элемента.

### utils.js

Этот модуль предоставляет утилиты для работы с DOM.

- **getElementById(id)**
  - **id**: Идентификатор элемента.
  - Возвращает элемент DOM по его идентификатору.

- **createElement(tagName)**
  - **tagName**: Имя тега элемента.
  - Создаёт новый элемент DOM с указанным тегом.

### eventHandlers.js

Этот модуль предоставляет методы для управления событиями.

- **addEventListener(element, event, handler)**
  - **element**: Элемент DOM.
  - **event**: Название события.
  - **handler**: Обработчик события.
  - Добавляет обработчик события к элементу.

- **removeEventListener(element, event, handler)**
  - **element**: Элемент DOM.
  - **event**: Название события.
  - **handler**: Обработчик события.
  - Удаляет обработчик события из элемента.

### domManipulation.js

Этот модуль предоставляет методы для манипуляции DOM.

- **appendChild(parent, child)**
  - **parent**: Родительский элемент.
  - **child**: Дочерний элемент.
  - Добавляет дочерний элемент к родительскому элементу.

- **removeChild(parent, child)**
  - **parent**: Родительский элемент.
  - **child**: Дочерний элемент.
  - Удаляет дочерний элемент из родительского элемента.

- **setAttribute(element, attribute, value)**
  - **element**: Элемент DOM.
  - **attribute**: Название атрибута.
  - **value**: Значение атрибута.
  - Устанавливает значение атрибута для элемента.

- **getAttribute(element, attribute)**
  - **element**: Элемент DOM.
  - **attribute**: Название атрибута.
  - Возвращает значение атрибута для элемента.

### styleManager.js

Этот модуль предоставляет методы для управления стилями через CSS-in-JS.

- **createStyleElement(styles)**
  - **styles**: Строка с CSS-стилями.
  - Создаёт элемент `<style>` с указанными стилями.

- **applyStyles(element, styles)**
  - **element**: Элемент DOM, к которому будут применены стили.
  - **styles**: Строка с CSS-стилями.
  - Применяет стили к элементу, создавая и добавляя элемент `<style>`.

- **removeStyles(element)**
  - **element**: Элемент DOM, из которого будут удалены стили.
  - Удаляет все элементы `<style>` из указанного элемента.

### index.js

Этот модуль экспортирует все методы и классы из других модулей для удобного использования.

- **initDataBinding(elementId, initialData)**
  - **elementId**: Идентификатор элемента.
  - **initialData**: Начальные данные для привязки.
  - Инициализирует двустороннее связывание данных для элемента с указанным идентификатором и начальными данными.

- **Экспортируемые функции**:
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

## Пример использования

### static/js/script.js

```javascript
import { initDataBinding, getElementById, createElement, appendChild, addEventListener, applyStyles } from '../../CoreFW/index.js';

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
