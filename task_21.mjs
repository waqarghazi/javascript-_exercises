// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

const car1 = new Car("Audi", "R8", 2022, "Waqar Ghazi");
const car2 = new Car("BMW", "M4", 2022, "Shahroz");

console.log(car1);
console.log(car2);