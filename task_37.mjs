// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "large",text = "I love JavaScript!") {
    let message = `The size of this shirt is ${size}, And the message printed on this shirt is ${text}`;
    console.log(message);
}

make_shirt();
make_shirt("medium");
make_shirt("small","I Love PHP!");