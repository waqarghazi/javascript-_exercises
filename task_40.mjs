// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name,album_title,no_of_songs = "") {
    const myObj = new Object();
    myObj.Artist_name = artist_name;
    myObj.Album_title = album_title;
    myObj.No_of_Songs = no_of_songs;
    return myObj;
}

let Dictionary1 = make_album("Drake","Her Loss");
console.log(Dictionary1);
let Dictionary2 = make_album("Taylor Swift","Midnights");
console.log(Dictionary2);
let Dictionary3 = make_album("Ed Sheeran","Divide");
console.log(Dictionary3);
let Dictionary4 = make_album("50 Cent","Get Rich or Die Tryin",16);
console.log(Dictionary4);