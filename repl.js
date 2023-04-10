const button = document.getElementById('submit-button');

let nameInput = document.getElementById("name");
let bookId = params.get('id');
console.log(bookId.textContent)
// let name = nameInput.value;



// Add a click event listener to the button
button.addEventListener('click', () => {
  // Create a data object with the field values
  const data = {
    name: nameInput.value,
    book: bookId
  };

  console.log(data)

  // Send a POST request to the dummy endpoint
  fetch('https://libsys.vercel.app/api/borrowed', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    // Handle the response from the server
    console.log(response);
  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
  });
});