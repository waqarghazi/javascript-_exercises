// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const names = ['Shahroz','Rana','Durraj','Bilal'];
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}

// console.log("Error",names[8]);