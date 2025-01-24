class DataBinder {
    constructor(element, data) {
        this.element = element;
        this.data = data;
        this.bindData();
    }

    bindData() {
        this.element.innerHTML = this.data;
    }

    updateData(newData) {
        this.data = newData;
        this.bindData();
    }
}

export { DataBinder };
