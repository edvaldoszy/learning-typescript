import Meal from "./Meal";

class Meat implements Meal {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

export default Meat;
