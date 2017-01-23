import Meal from "./Meal";

interface Person {

    walk();
    stop();

    eat(meal: Meal);
    say(text: string);
}

export default Person;
