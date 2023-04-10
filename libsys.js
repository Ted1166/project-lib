// Get the URL query string
const queryString = window.location.search;

// Parse the query string into an object
const params = new URLSearchParams(queryString);

// Extract the values from the object
const id = params.get('id');
const title = params.get('title').replace(/"/g, '');

const author = params.get('author').replace(/"/g, '');

// const field3 = params.get('field3');

// Use the values to populate the form
document.getElementById('id').textContent = "Book No: " + id;
document.getElementById('title').textContent = "Title: "  + title;
document.getElementById('author').textContent = "Author: " + author;
// document.getElementById('field3').value = field3;


// Get references to the form fields and the button
// const name = document.getElementById('name');
// const field2 = document.getElementById('field2');


$(".ope button").click(function() {
    window.location.href = `openlib.html`;
});
