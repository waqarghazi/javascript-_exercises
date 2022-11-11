// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

console.log();
console.log("OPPs!!, My dinner table will not be arriving on time so I can only invite 2 people for dinner on 30th December.");
console.log();

let removeMembers = members.length-2;
for (let index = 0; index < removeMembers; index++) {
    let invitation = `Hi ${members.pop()}, I am sorry, Due to unavailibility of dinner table I will be not able to invite you for dinner this time. Hope you will understand.`;
    console.log(invitation);
}

console.log();

members.forEach(member => {
    let invitation = `Hi ${member}, Hope you are Good. You are still invited to Dinner On 30th December At My Home.`;
    console.log(invitation);
});

console.log();

let removeAllMembers = members.length;
for (let index = 0; index < removeAllMembers; index++) {
    let invitation = `Hi ${members.pop()}, I am sorry, Due to unavailibility of dinner table I will be not able to invite you for dinner this time. Hope you will understand.`;
    console.log(invitation);
}

console.log();

console.log("Members List:", members);

