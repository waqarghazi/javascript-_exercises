// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['Mango', 'Grapes', 'Banana'];
console.log("Favorite Fruits:",favorite_fruits);

if (favorite_fruits.includes("Mango")) {
    console.log("You Really Like Mango");
}

if (favorite_fruits.includes("Apple")) {
    console.log("You Really Like Apple");
}

if (favorite_fruits.includes("Orange")) {
    console.log("You Really Like Orange");
}

if (favorite_fruits.includes("Grapes")) {
    console.log("You Really Like Grapes");
}

if (favorite_fruits.includes("Banana")) {
    console.log("You Really Like Banana");
}