// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let car = ['CIVIC X','Corolla Grande','Ferrari 480'];
let statements = [`has a very sporty look.`, `is very spacious.`, `has a high speed of 335 kph.`]
for (let index = 0; index < car.length; index++) {
    const message = car[index]+' '+statements[index];
    console.log(message);
}