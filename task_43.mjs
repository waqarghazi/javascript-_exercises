// Unchanged Magicians: Start with your work from Exercise 42. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician_names = ['Jhonny', 'Charlie', 'Shawn'];

function show_magicians(magician_names) {
    magician_names.forEach(magician_name => {
        console.log(magician_name);
    });
}

function make_great(magician_names) {
    let magician_name_changed = Array();
    for (let index = 0; index < magician_names.length; index++) {
        const magician_name = magician_names[index];
        magician_name_changed[index] = `${magician_name} the Great!`;
    }
    return magician_name_changed
}

const great_magicians = make_great(magician_names);

show_magicians(magician_names);
console.log();
show_magicians(great_magicians);