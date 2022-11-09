// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let members = ['Shahroz', 'Bilal', 'Mazhar', 'Abdul Haadi'];
members.forEach(member => {
    let invitation = `Hi ${member},Hope you are Good. You are invited to Dinner On 30th December At My Home.`;
    console.log(invitation);
});

console.log();
console.log(`I have invited ${members.length} guests for Dinner on 30th December.`);