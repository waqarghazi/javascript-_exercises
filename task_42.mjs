// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let magician_names = ['Jhonny', 'Charlie', 'Shawn'];

function show_magicians(magician_names) {
    magician_names.forEach(magician_name => {
        console.log(magician_name);
    });
}

show_magicians(magician_names);
console.log();

function make_great(magician_names) {
    for (let index = 0; index < magician_names.length; index++) {
        const magician_name = magician_names[index];
        magician_names[index] = `${magician_name} the Great!`;
    }

}

make_great(magician_names);
show_magicians(magician_names);