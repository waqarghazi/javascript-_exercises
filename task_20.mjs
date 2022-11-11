// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

function createList(company_1, company_2, company_3, company_4) {
    const array = new Array(company_1, company_2, company_3,company_4);
    return array;
}

const myArray = createList("Audi", "BMW", "Mustang", "Bugatti");
console.log("Top Car Companies:",myArray);