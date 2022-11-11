// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_names = ['Jhonny', 'Charlie', 'Shawn'];

function show_magicians(magician_names) {
    magician_names.forEach(magician_name => {
        console.log(magician_name);
    });
}

show_magicians(magician_names);