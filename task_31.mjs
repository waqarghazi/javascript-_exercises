// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames = []
if (usernames.length == 0) {
    console.log("We need to find some users!");
}else{
    usernames.forEach(username => {
        if(username == 'admin'){
            let message = `Hello admin, would you like to see a status report?`;
            console.log(message);
        }else{
            let message = `Hello ${username}, thank you for logging in again.`;
            console.log(message);
        }
    });
}