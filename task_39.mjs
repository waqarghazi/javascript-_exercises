// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city,country) {
    let message = `"${city}, ${country}"`;
    return message;
}

let City1 = city_country("Karachi","Pakistan");
console.log(City1);
let City2 = city_country("Tokyo","Japan");
console.log(City2);
let City3 = city_country("Dubai","UAE");
console.log(City3);