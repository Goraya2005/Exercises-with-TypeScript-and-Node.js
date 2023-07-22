

let personName: string = "Naeem Goraya";

// Convert to lowercase
let nameLowercase: string = personName.toLowerCase();

// Convert to uppercase
let nameUppercase: string = personName.toUpperCase();

// Convert to title case
let nameTitlecase: string = personName.replace(/\b\w/g, (match) => match.toUpperCase());

console.log("Original Name:", personName);
console.log("Lowercase:", nameLowercase);
console.log("Uppercase:", nameUppercase);
console.log("Title Case:", nameTitlecase);
