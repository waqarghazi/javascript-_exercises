// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let host = "Syed Muhamamd Waqar Ghazi";
let members = ['Shahroz', 'Bilal', 'Mazhar', 'Abdul Haadi'];
let memberNotAvailable = "Mazhar";

members.forEach(member => {
    let invitation = `Hi ${member},Hope you are Good. You are invited to Dinner On 30th December At My Home.`;
    console.log(invitation);
});

console.log();

console.log(`Sorry ${host}, ${memberNotAvailable} here, I will be out of town on 30th December.`);
members.splice(members.indexOf(memberNotAvailable), 1, "Talha");

console.log();

members.forEach(member => {
    let invitation = `Hi ${member},Hope you are Good. You are invited to Dinner On 30th December At My Home.`;
    console.log(invitation);
});

console.log();
console.log("I just found a big dinner table so i will be adding some more guests.");

members.unshift("Durraj");
members.splice(Math.round(members.length / 2), 0, 'Babar');
members.push('Jameel');

console.log();

members.forEach(member => {
    let invitation = `Hi ${member},Hope you are Good. You are invited to Dinner On 30th December At My Home.`;
    console.log(invitation);
});