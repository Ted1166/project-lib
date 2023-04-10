const tableBody = document.getElementById("table-body");
const tableBody1 = document.getElementById("table-body1");

endpointUrl = "https://libsys.vercel.app/api/books"

fetch(endpointUrl)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    data.forEach(item => {
        // Create a new table row element
        const row = document.createElement("tr");

        row.classList.add('clickable-row');
        row.setAttribute('data-id', JSON.stringify(item.id));
        row.setAttribute('data-title', JSON.stringify(item.book_name));
        row.setAttribute('data-author', JSON.stringify(item.author));
        
        // Create a new table cell element for each property in the item object
        const nameCell = document.createElement("td");
        const authorCell = document.createElement("td");
        const publisherCell = document.createElement("td");
        const statusCell = document.createElement("td");
        
        // Set the text content of each cell to the corresponding property value
        nameCell.textContent = item.book_name;
        authorCell.textContent = item.author;
        publisherCell.textContent = item.publisher;
        statusCell.textContent = item.status_display;

        console.log(item.status)
        
        // Append the cells to the row
        row.appendChild(nameCell);
        row.appendChild(authorCell);
        row.appendChild(publisherCell);
        row.appendChild(statusCell);
        
        // Append the row to the table body
        tableBody.appendChild(row);

        $("tr").click(function() {
            // Get the data attributes of the clicked row
            console.log("hey")
            const id = $(this).data("id");
            const title = $(this).data("title");
            const author = $(this).data("author");
            console.log(id) 
            console.log(title)           
            // Navigate to the new HTML form with the data in the URL
            window.location.href = `book.html?id=${id}&title=${title}&author=${author}`;
        });
         
          
      });


} )
  .catch(error => console.error(error));




function getbooks(){
    // document.getElementById('output').innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a => a.json())
    .then(response => {

        book_data = response.docs
        console.log(response)
        console.log(book_data)
        // for(var i=0; i<10; i++){
        //     document.getElementById("output").innerHTML+="<div class='book'><h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>
        
        // }

        book_data.forEach(item => {
          // Create a new table row element
          const row = document.createElement("tr");
        
  
          row.classList.add('clickable-row-book');
          row.setAttribute('data-id-book', JSON.stringify(item.id));
          row.setAttribute('data-title-book', JSON.stringify(item.book_name));
          row.setAttribute('data-author-book', JSON.stringify(item.author));
          
          // Create a new table cell element for each property in the item object
          const nameCell = document.createElement("td");
          const authorCell = document.createElement("td");
          const publisherCell = document.createElement("td");
          const buttonCell = document.createElement("td");

          
          
          
          // Set the text content of each cell to the corresponding property value
          nameCell.textContent = item.title;

          authorCell.textContent = item.author_name;
          publisherCell.textContent = item.publisher;
         
          const addButton = document.createElement("button");
          addButton.setAttribute("type", "button");
          addButton.setAttribute("class", "add-btn");
          addButton.textContent = "Add To Library";
          addButton.addEventListener("click", function() {
            addBook(item.title,item.author_name[0],item.publisher[0]);
          });
          // console.log(item.status)

          buttonCell.appendChild(addButton);
          
          // Append the cells to the row
          row.appendChild(nameCell);
          row.appendChild(authorCell);
          row.appendChild(publisherCell);
          row.appendChild(buttonCell);
          
          // Append the row to the table body
          tableBody1.appendChild(row);
  
          // $("tr").click(function() {
          //     // Get the data attributes of the clicked row
          //     console.log("hey")
          //     const id = $(this).data("id");
          //     const title = $(this).data("title");
          //     const author = $(this).data("author");
          //     console.log(id) 
          //     console.log(title)           
          //     // Navigate to the new HTML form with the data in the URL
          //     window.location.href = `book.html?id=${id}&title=${title}&author=${author}`;
          // });
           
            
        });
    });
}

function addBook(title,author_name,publisher) {
  // You can add code here to handle borrowing the selected book
  const data = {
    book_name: title,
    author: author_name,
    publisher:publisher
    // status:1
  };

  console.log(data)

  // Send a POST request to the dummy endpoint
  fetch('https://libsys.vercel.app/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    // Handle the response from the server

    if (response.ok){
      console.log(response);
      alert("You added  book with details: \n " + "Title: " + title + "\n" + " " + "by: " + author_name + " "+ "published by: " + publisher);
    
    }else{
      alert("Something went wrong");
       
    }

  })
  .catch(error => {
    // Handle any errors that occur
    console.error(error);
    alert("Something is wrong");
  });
  
}


