"use strict";

// sample data - expanded Star Wars characters with varied ages
let users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// Empty array to contain error messages
const errors = [];




// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM fully loaded and parsed");


// STORED ELEMENT REFERENCES
const namesList = document.getElementById("names-list");
const youngCharactersList = document.getElementById("young-characters-list");
const functionList = document.getElementById("function-list");
const ageFilterList = document.getElementById("age-filter-list");
const errorMessages = document.getElementById("error-messages");
const brokenArrayErrors = document.getElementById("broken-array-errors");

// HELPER FUNCTIONS
// Tests the age parameter to ensure it's a positive, "Finite" integer
const testAgeParam  = (value) => {
  return (
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    value > 0 &&
    value !== Infinity
  );
};

const checkName = (user) => {

  if (!user.hasOwnProperty("name")) {
    const errorMessage = `Error: User object with ID ${user.id} is missing a "name" property.`;
};

// creates a list item from a user object contained within the users array
const createListItem = (userData) => {
  const listItem = document.createElement("li");
  const idSpan = document.createElement("span");
  const textNode = document.createTextNode(userData.name);

  idSpan.classList.add("id-span");
  idSpan.textContent = `ID: ${userData.id} `;

  listItem.appendChild(idSpan);
  listItem.appendChild(textNode);

  return listItem;
}

// creates a document fragment in which to insert the generated <li> elements, then append the fragment to the <ul> in order to avoid redraws and improve performance
const populateList = (outputElement, userArray, age = null) => {
  const listFragment = document.createDocumentFragment();
  console.log('age: ',age);
  console.log({userArray})
  console.log(`filtered array:`, userArray.filter(user => user.age < age));

  userArray = (testAgeParam(age)) ? userArray.filter(user => user.age < age) : userArray;
  console.log({userArray})

  userArray.forEach((user) => {
    // create a list item using the helper function and append it to the fragment
    const userListItem = createListItem(user);
    listFragment.appendChild(userListItem);
  });

  outputElement.appendChild(listFragment);
}

// logs user data from an array. It can take additional arguments as strings to print out specific user attributes, which should make it a bit more versatile when you only want to log specific data
const logUserData = (userArray, ...args) => {
  // if no particular arguments are specified as a second parameter, default to accessing id, name, and age
  const attributes = args.length ? args : ["id", "name", "age"];

  userArray.forEach((user) => {
    const userInfo = attributes.map((attr) => `${attr}: ${user[attr]}`).join(`,\n`);

    console.log(`${userInfo}\n\n`);
  })
}

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("=============\nPart 1: all Users\n==============\n\n");

logUserData(users);
populateList(namesList, users);



// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

const ageFortyArray = users.filter((user) => user.age < 40);
console.log("=============\nPart 2: Users under 40\n==============\n\n");

logUserData(ageFortyArray, "name", "age");
populateList(youngCharactersList, ageFortyArray); // TODO: adjust to allow choice of which attributes to place in list items

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

// NOTE: so I guess I kind of already did this above, so I'm going to paste the code here and comment it out for reference, but I'm leaving it up top because arrow functions and I need it to exist before it's use cases.

// *****Original function definition LINE 47*****

// const populateList = (outputElement, userArray, ...args) => {
//   const listFragment = document.createDocumentFragment();

//   userArray.forEach((user) => {
//     // create a list item using the helper function and append it to the fragment
//     const userListItem = createListItem(user);
//     listFragment.appendChild(userListItem);
//   });

//   outputElement.appendChild(listFragment);
// }

populateList(functionList, users);


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

populateList(ageFilterList, users, 40);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

// });