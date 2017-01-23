import Person from "./Person";
import Meal from "./Meal";
import Meat from "./Meat";

class EdvaldoSzymonek implements Person {

    walk() {
        console.log("I started walking");
    }

    stop() {
        console.log("I stoped walking");
    }

    eat(meal: Meal) {
        console.log("I'm eating " + meal.toString());
    };

    say(text: string) {
        console.log(text);
    }
}

export default EdvaldoSzymonek;
