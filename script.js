window.onload = () => {
  loadBooks("https://striveschool-api.herokuapp.com/books");
};

// You are creating the "shopping cart experience" for a Online Marketplace.
// You have the list of the available books from the current API:
// https://striveschool-api.herokuapp.com/books
// What you have to do is:
// 0) Get all the products from the API using a fetch
// 1) Display the list of items available on the page using template literals `` and .forEach
// 2) Add a "add to cart button"
// 3) When the button is pressed, change the style of the item and add it to another list
// 4) Add "skip" button next to each item
// 5) When pressed, the button should remove from the page the item not interesting from the user
// 6) Add a "search bar". When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
// 7) Allow the user to delete items from the cart list

// [EXTRA]
// 8) Add a "clean cart" button, to clean the whole list.
// 9) Create a second "detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
// 10) In page "detail" show some details of the selected product (https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)

let books = [];

function loadBooks(url) {
  fetch(url)
    .then((response) => response.json())
    .then((bookdata) => {
      books = bookdata;
      console.log(bookdata);
      displayBooks(bookdata);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("loading books");
}

function displayBooks(books) {
  const row = document.querySelector(".book-row");

  row.innerHTML = "";

  books.forEach((book) => {
    let bookContainer = document.createElement("div");
    bookContainer.classList.add("col-12", "col-sm-6", "col-md-3");

    bookContainer.innerHTML = `   
                    <div class="card">
                        <img src="${book.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text price">${book.price}</p>
                        <button type="button" onclick="addToCart(this.parentNode.parentNode)" class="btn btn-light add-to-cart">Add to Cart</button>
                        </div>
                    </div>
            `;
    row.appendChild(bookContainer);
  });
}
let cart = [];

function makeBook(title, price) {
  return { title, price };
}

function addToCart(el) {
  let bookTitle = el.querySelector(".card-title").innerText;
  let bookPrice = el.querySelector(".price").innerText;
  let book = makeBook(bookTitle, +bookPrice);
  cart.push(book);
  console.log(book);
  el.classList.add("sold");
}

function shoppingCart() {
  let shoppingCartContainer = document.querySelector(".shopping-list");
  let item = document.createElement();
}
