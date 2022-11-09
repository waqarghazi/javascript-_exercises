// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.

const names = ['Shahroz','Rana','Durraj','Bilal'];

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    const message = `Hi ${element}, you are invited for a dinner on New Years Eve.`;
    console.log(message);
}