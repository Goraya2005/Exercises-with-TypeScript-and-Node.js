
let guestList: string[] = ["Abdullad", "Abdul Rahman", "Abdul Raheem"];

// Print an invitation message to each person in the guest list.
console.log(`Dear ${guestList[0]},\nYou are invited to dinner at my place on Saturday. Looking forward to having you!\n`);

console.log(`Dear ${guestList[1]},\nYou are invited to dinner at my place on Saturday. Looking forward to having you!\n`);

console.log(`Dear ${guestList[2]},\nYou are invited to dinner at my place on Saturday. Looking forward to having you!\n`);

// Guest who can't make it
let guestUnableToAttend: string = guestList[1];
console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.\n`);

// Replace the name of the guest who can't make it with the name of the new person being invited
guestList[1] = "New Guest";

// Print a second set of invitation messages for each person who is still in the list.
console.log(`Dear ${guestList[0]},\nYou are still invited to dinner at my place on Saturday. See you there!\n`);

console.log(`Dear ${guestList[1]},\nYou are invited to dinner at my place on Saturday. Looking forward to having you!\n`);

console.log(`Dear ${guestList[2]},\nYou are still invited to dinner at my place on Saturday. See you there!\n`);
