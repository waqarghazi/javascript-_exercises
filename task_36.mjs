// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size,text) {
    let message = `The size of this shirt is ${size}, And the message printed on this shirt is ${text}`;
    console.log(message);
}

make_shirt("Medium","Dil Dil Pakistan!!");