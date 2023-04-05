function getbooks(){
    document.getElementById('output').innerHTML="";
    fetch("http://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a => a.json())
    .then(response => {
        for(var i=0; i<10; i++){
            document.getElementById("output").innerHTML+="<div class='book'><h2>"+response.docs[i].title+"</h2>"+response.docs[i].author_name[0]+"<br><img src='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br><button type='button' class='borrow-btn' onclick='borrowBook("+response.docs[i].key+")'>Borrow</button></div>";
        }
    });
}

function borrowBook(key) {
  // You can add code here to handle borrowing the selected book
  alert("You clicked the borrow button for book with key: " + key);
}
