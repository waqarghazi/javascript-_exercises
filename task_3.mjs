// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let username = "Syed muhammad Waqar Ghazi";
console.log("Orignal:",username);
console.log("LowerCase:",username.toLowerCase());
console.log("UpperCase:",username.toUpperCase());
console.log("TitleCase:",toTitleCase(username));

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }