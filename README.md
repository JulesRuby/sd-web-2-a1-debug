# Week 1 Assignment - Development Setup & Bug Hunt

This project is designed to help you verify your development environment and refresh your HTML, CSS, and JavaScript debugging skills.

---

## Assignment Checklist

This is a summary of the main tasks you need to complete.

- [x] **Part 1: Environment**
  - [x] Verify Node.js is installed correctly.
  - [x] Capture a screenshot of the `node` prompt with your name.
- [x] **Part 2: The Project**
  - [x] (Just did a fork and clone) Download a zip folder of this repository from github and initialize a new repo with it. When this is complete, you should be able to edit the code in your editor and then push it to github
  - [x] Create a `.gitignore` file.
  - [x] Create a folder for static assets (e.g., `public/` or `assets/`)
  - [x] Add your Node.js screenshot to the asset folder.
  - [x] Fix all bugs in the HTML, CSS, and JavaScript files.
  - [x] Move any existing images into your new asset folder.
  - [x] Fill out the "Git Terminology Definitions" section in this README.
- [x] **Part 3: Submission**
  - [x] Make at least two meaningful Git commits and push them to GitHub.
  - [x] Deploy your fixed website using GitHub Pages.
  - [x] Submit your repository and live GitHub Pages links to Brightspace.

---

## Hints for the Bug Hunt

Look for common errors across all files. There are issues with syntax, logic, and best practices.

- **HTML (`index.html`)**:
  - Are all tags used correctly for their purpose? Review semantic tags like `<nav>`, `<main>`, and `<footer>`.
  - Use the [W3C validator](https://validator.w3.org/) to find syntax errors.
- **CSS (`main.css`)**:
  - Check for simple typos in property names or selectors.
  - Test the site on different screen sizes using your browser's developer tools. Is it responsive?
  - Use your browser's inspector to check for accessibility issues, like poor color contrast.
- **JavaScript (`script.js`)**:
  - **Always check the browser console first!** It will tell you where the errors are.
  - Look for typos in variable names and function calls.
  - Verify that the IDs used in `getElementById()` match the IDs in your `index.html` file exactly.

---


## Learning Objectives

By completing this assignment, you will practice:

- Verifying a Node.js development environment.
- Debugging common HTML, CSS, and JavaScript errors.
- Reinforce familiarity with foundational Git Practices
- Organizing a project with a dedicated asset folder.
- Deploying a static website to GitHub Pages.
