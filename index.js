// Get the form element and the table body element
const form = document.querySelector('form');
const tbody = document.querySelector('table tbody');

// Add an event listener for the form submit event
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Get the search input value
  const searchInput = document.querySelector('input[type="text"]');
  const searchTerm = searchInput.value.trim();
  
  // Clear the table body
  tbody.innerHTML = '';
  
  // Loop through the book data and display the matching books
  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase().includes(searchTerm.toLowerCase())) {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      const author = document.createElement('td');
      const publisher = document.createElement('td');
      const status = document.createElement('td');
      title.textContent = books[i].title;
      author.textContent = books[i].author;
      publisher.textContent = books[i].publisher;
      status.textContent = books[i].status;
      row.appendChild(title);
      row.appendChild(author);
      row.appendChild(publisher);
      row.appendChild(status);
      tbody.appendChild(row);
    }
  }
});

// Sample book data
const books = [
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publisher: 'Charles Scribner\'s Sons', status: 'Available'},
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', publisher: 'J. B. Lippincott & Co.', status: 'Checked Out'},
  {title: '1984', author: 'George Orwell', publisher: 'Secker & Warburg', status: 'Available'},
  {title: 'Animal Farm', author: 'George Orwell', publisher: 'Secker & Warburg', status: 'Checked Out'},
  {title: 'Brave New World', author: 'Aldous Huxley', publisher: 'Chatto & Windus', status: 'Available'},
  {title: 'The Catcher in the Rye', author: 'J. D. Salinger', publisher: 'Little, Brown and Company', status: 'Available'}
];
