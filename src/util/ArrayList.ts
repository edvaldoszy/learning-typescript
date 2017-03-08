import List from "./List";

class ArrayList<T> implements List<T> {

    private dataset: T[];

    constructor() {
        this.dataset = [];
    }

    public add(object: T) {
        this.dataset.push(object);
    }

    public remove(index: number) {
        delete this.dataset[index];
    }

    public size(): number {
        return this.dataset.length;
    }
}

export default ArrayList;
