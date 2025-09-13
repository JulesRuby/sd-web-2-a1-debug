"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
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

// Empty array to contain error messages (NOT REALLY NECESSARY, BUT WHY NOT)
const errors = [];

// STORED ELEMENT REFERENCES
const namesList = document.getElementById("names-list");
const youngCharactersList = document.getElementById("young-characters-list");
const functionList = document.getElementById("function-list");
const ageFilterList = document.getElementById("age-filter-list");
const errorMessages = document.getElementById("error-messages");
const brokenArrayErrors = document.getElementById("broken-array-errors");

// HELPER FUNCTIONS
// Tests the age parameter to ensure it's a positive, "Finite" integer
const testAgeParam  = value => {
  return (
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    value > 0 &&
    value !== Infinity
  );
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

const displayErrorMessage = (errorData, errorOutputElement) => {
  const errorCodeElement = document.createElement("code");
  // const idSpan = document.createElement("span");
  // const textNode = document.createTextNode(userData.name);

  // idSpan.classList.add("id-span");
  // idSpan.textContent = `ID: ${userData.id} `;

  // listItem.appendChild(idSpan);
  errorCodeElement.innerText(errorData.message);

  errorOutputElement.appendChild(errorCodeElement);

  // return listItem;
}

// creates a document fragment in which to insert the generated <li> elements, then append the fragment to the <ul> in order to avoid redraws and improve performance
const populateList = (outputElement, userArray, age = null) => {
  const listFragment = document.createDocumentFragment();
  userArray = (testAgeParam(age)) ? userArray.filter(user => user.age < age) : userArray;

  userArray.forEach((user) => {
    // create a list item using the helper function and append it to the fragment
    // console.log(`USER: ${JSON.stringify(user, null, 2)}`);
    // checkName(user);
    const userListItem = createListItem(user);
    listFragment.appendChild(userListItem);
  });

  // TODO: Ashlyn asked to refactor this to use string interpolation instead of appending the fragment? Though as I am typing this out, I'm not sure it makes sense to do that. They probably meant within the createListItem function? I'll look into it and ask again later. I'm too tired to function so I'm probably missing something obvious.
  outputElement.appendChild(listFragment);
}

// logs user data from an array. It can take additional arguments as strings to print out specific user attributes, which should make it a bit more versatile when you only want to log specific data
const logUserData = (userArray, ...rest) => {
  // if no particular arguments are specified as a second parameter, default to accessing id, name, and age
  const attributes = rest.length ? rest : ["id", "name", "age"];

  userArray.forEach((user) => {
    const userInfo = attributes.map((attr) => `${attr}: ${user[attr]}`).join(`,\n`);

    console.log(`${userInfo}\n\n`);
  })
}

// broken test data for exercise 6
const usersBadNameData = [
  { id: 1, name: "", age: 23 },
  { id: 2, name: null, age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: undefined, age: 32 },
  { id: 7, name: 0, age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("=============\nPart 1: All user names:\n==============\n\n");

logUserData(users);
populateList(namesList, users);



// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

const ageFortyArray = users.filter((user) => user.age < 40);
console.log("=============\nPart 2: Users under 40\n==============\n\n");

logUserData(ageFortyArray, "name", "age");
populateList(youngCharactersList, ageFortyArray); // TODO: adjust to allow choice of which attributes to place in list items

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function populateListFromArray(outputElement, userArray) {
  // Create Document Fragment to hold list items
  const listFragment = document.createDocumentFragment();

  userArray.forEach((user) => {
    // create a list item using the helper function and append it to the fragment
    try {
      checkValidName(user);
      const userListItem = createListItem(user);
      listFragment.appendChild(userListItem);
    } catch (error) {
      console.log(error.message);

    }
    // const userListItem = createListItem(user);
    // listFragment.appendChild(userListItem);
  });

  outputElement.appendChild(listFragment);
}

populateListFromArray(functionList, users);


// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function populateListFromFilteredArray(outputElement, userArray, age = null) {
  // Create Document Fragment to hold list items
  const listFragment = document.createDocumentFragment();

  // Test if the age parameter is valid, and filter the userArray if so
  userArray = (testAgeParam(age)) ? userArray.filter(user => user.age < age) : userArray;

  userArray.forEach((user) => {
    try {
      checkValidName(user);
      const userListItem = createListItem(user);
      listFragment.appendChild(userListItem);
    } catch (error) {
      console.log(error);
      displayErrorMessage(error, errorMessages);

    }


  });

  outputElement.appendChild(listFragment);
}

// populateList(ageFilterList, users, 40);
populateListFromFilteredArray(ageFilterList, users, 40);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// accepts user Object as argument and checks to see if the Object contains a "name" property and is also not an empty string.
function checkValidName(user) {
  if (
    !user.hasOwnProperty("name") ||
    typeof user.name !== "string" ||
    user.name.trim() === ""
  ) {
    const nameError = new TypeError(
      `Error: User object with ID ${user.id} is missing a valid "name" property.`
    );

    // console.error(nameError);
    throw nameError;
  }
};


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
// populateList(brokenArrayErrors, usersBadNameData);

populateListFromArray(brokenArrayErrors, usersBadNameData);
populateListFromFilteredArray(brokenArrayErrors, usersBadNameData, 40);
