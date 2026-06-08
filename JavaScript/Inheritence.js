 // inheritence in JavaScript   :- inherite the properties and methods of one class to another class

 // 1. single level inheritence

 class Animal {
        eat() {
            console.log("Animal is eating");
        }
 }
 class Dog extends Animal {
bark() {
    console.log("Dog is barking");

}   
 }
 const dog = new Dog();
    dog.eat(); // inherited method from Animal class
    dog.bark(); // method defined in Dog class


    // 2. multilevel inheritence
console.log("-----------------------------");
    class Mammal extends Dog {
        walk() {
            console.log("Mammal is walking");
        }
    }

    const mammal = new Mammal();
    mammal.eat(); // inherited method from Animal class
    mammal.walk(); // method defined in Mammal class
    mammal.bark(); // inherited method from Dog class

    console.log("-----------------------------");

    // 3. hierarchical inheritence

    class Cat extends Animal {
        meow() {
            console.log("Cat is meowing");
        }
    }
    class Cow extends Animal {
        moo() {
            console.log("Cow is mooing");
        }
    }

    const cat = new Cat();
    cat.eat(); // inherited method from Animal class
    cat.meow(); // method defined in Cat class

    const cow = new Cow();
    cow.eat();// inherited method from Animal class
    cow.moo(); // method defined in Cow class

    // 4.Hybrid Inheritence

    console.log("-----------------------------");

    class Bird extends Animal {
        fly() {
            console.log("Bird is flying");
        }
    }
    class Sparrow extends  Animal {
        chirp() {
            console.log("Sparrow is chirping");
        }
    }
    class Parrot extends Bird {
        talk() {
            console.log("Parrot is talking");
        }   
    }

    const parrot = new Parrot();
    parrot.eat(); // inherited method from Animal class
    parrot.fly(); // inherited method from Bird class
    parrot.talk(); // method defined in Parrot class    

    const sparrow = new Sparrow();
    sparrow.eat(); // inherited method from Animal class
    sparrow.chirp(); // method defined in Sparrow class


    console.log("-----------------------------");

    // 5. multiple inheritence
    // JavaScript does not support multiple inheritence directly, but we can achieve it using mixins or composition.
 const fly = {
    fly() {
        console.log("Flying");
    }
 }

 const swim = {
    swim() {
        console.log("Swimming");
    }   
    }

    class Duck {};

    Object.assign(Duck.prototype, fly, swim);

    const duck = new Duck();
    duck.fly(); // method from fly object
    duck.swim(); // method from swim object