interface Meal {

    toString();
}

interface Person {

    walk();
    stop();

    eat(meal: Meal);
    say(text: string);
}

class Clark implements Person {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    walk() {
        console.log("Walking...");
    }

    stop() {
        console.log("Stoped!");
    }

    eat(meal: Meal) {
        console.log(this.name + " is eating " + meal.toString());
    };

    say(text: string) {
        console.log(this.name + " said: " + text);
    }
}

class Superman extends Clark {
    
    fly() {
        console.log(this.name + " is flying...");
    }
}

class Meat implements Meal {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}

var p = new Superman("Edvaldo Szymonek");
p.say("Hello");
p.eat(new Meat("Something"));
