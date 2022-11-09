// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

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