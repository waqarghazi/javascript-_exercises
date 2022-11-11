// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function cars( Manufacturer, Model, args) {
    return ({
        Manufacturer,
        Model,
        ...(args)
    })
}
let car1 = cars("Honda","Civic");
console.log(car1);
let car2 = cars("BMW","M4",{"Color":"Black","Year":"2022"});
console.log(car2);
let car3 = cars("Hummer","HV");
console.log(car3);
let car4 = cars("Audi","R8",{"Color":"Red"});
console.log(car4);