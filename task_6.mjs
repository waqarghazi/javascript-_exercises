// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

const name1 = "\tSyed \n Muhammad \t Waqar \n Ghazi   ";
const name2 = "   Syed Muhammad Waqar Ghazi   ";
console.log("Name 1:",name1);
console.log("Name 2:",name2);

const trimedname1 = name1.replace(/\s+/g, " ").trim();
const trimedname2 = name2.trim();

console.log("");
console.log("Name 1:",trimedname1);
console.log("Name 2:",trimedname2);