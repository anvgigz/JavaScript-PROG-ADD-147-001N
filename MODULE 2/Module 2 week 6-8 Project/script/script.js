"use strict"; // Use strict mode to prevent errors and make more secure code

// Variables
const form = document.getElementById('purchaseForm');
const groceryItemsSelect = document.getElementById('groceryItems');
const itemQuantity = document.getElementById('itemQuantity');
const cartItems = document.getElementById('cartItems');
const totalCostDisplay = document.getElementById('totalCost');
const saveCartBtn = document.getElementById('saveCartBtn');
const loadCartBtn = document.getElementById('loadCartBtn');
const cartIdInput = document.getElementById('cartId');
let totalCost = 0;
let cart = [];

// Grocery items array
const groceryItems = [
  { name: 'apple', price: 30 },
  { name: 'mango', price: 20 },
  { name: 'grapes', price: 50 }
];

// Populate the dropdown with grocery items
function populateDropdown() {
  groceryItems.forEach(item => {
    const option = document.createElement('option');
    //GroceryItems array is stored into new option element
    option.value = `${item.name},${item.price}`;
    //Option value is set to item name and price separated by a comma
    option.textContent = `${item.name.charAt(0).toUpperCase() + item.name.
    slice(1)} - $${item.price}`;
    //Option text content is set to item name with first letter capitalized and price with added $ sign
    groceryItemsSelect.appendChild(option);
  }); //Option element is appended to the groceryItemsSelect dropdown which is declared in the variables the select element is in the HTML file (groceryItems)
}


// Call the above function to populate the dropdown
populateDropdown();

// Function to add item to cart
function addItemToCart(name, price, quantity) {
  let item = {
    name: name,
    price: price,
    quantity: quantity
  };//item object is created with name, price, and quantity
  cart.push(item); //item object is pushed into the cart array
  totalCost += price * quantity; //total cost is updated by adding the price multiplied by the quantity
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevents page from refreshing on form submission (default behavior)
  const selectedItem = groceryItemsSelect.value.split(',');
  //retrieves the item selected from the dropdown and splits it into an array (name, $price)
  const name = selectedItem[0]; //index 0 selects name
  const price = parseFloat(selectedItem[1]); //index 1 selects price and converts it to a float
  const quantity = parseInt(itemQuantity.value); //quantity is set to the value of the itemQuantity input field

  // Ensure quantity is positive
  if (quantity > 0) {
    addItemToCart(name, price, quantity); //calls the addItemToCart function with the name, price, and quantity
    displayCart(); //calls the displayCart function to display the cart items
  } else {
    alert('Quantity must be a positive number.');
  }
});

// Function to display cart items
function displayCart() {
  cartItems.innerHTML = '';//initializes the cartItems list to an empty string
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} x ${item.quantity} quantity`;//creates a list item with the item name, price, and quantity to be displayed in the shopping cart

    // Create remove button
    const removeBtn = document.createElement('button');//creates a remove button element
    removeBtn.textContent = 'Remove';//sets the text content of the remove button to 'Remove'
    removeBtn.className = 'remove-btn';//sets the class name of the remove button to 'remove-btn'
    removeBtn.addEventListener('click', () => removeItemFromCart(index));
//adds an event listener to the remove button that calls the removeItemFromCart function with the index of the item to be removed
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });//appends the remove button to the list item and appends the list item to the cartItems list
  totalCostDisplay.textContent = totalCost.toFixed(2);
  //displays the total cost of the items in the cart to 2 decimal places
}

// Function to remove item from cart
function removeItemFromCart(index) {
  const item = cart[index];
  totalCost -= item.price * item.quantity;
  cart.splice(index, 1);//removes the item from the cart array at the specified index , the 1 indicates only 1 item will be removed.
  displayCart();//display cart function is called again to update web browser.
}

// Function to save cart
// to view right click web page -> inspect -> Application -> localStorage
// delete Here or through Browser settings for cookies and Site Data
function saveCart() {
  const cartId = Math.random().toString(36).substr(2, 9);
  // Generates a random 9 character string using 1-9 and a-z
  //substr(2, 9) - 2 is the starting index and 9 is the length of the string
  //starts at 3rd character to exclude 0. and 1st 2 characters are 0. and 1.
  localStorage.setItem(cartId, JSON.stringify(cart));
  // using local storage for save will make data persistent even after page reload
  //key value pair is saved (cartId, and cart (array of objects as a JSON string))
  //Local Storage can only store strings, so we need to convert the cart array to a string using JSON.stringify
  alert(`Your cart has been saved with ID: ${cartId}`);
  // web alert will show the cartId //you can still access this code through inspect -> Application -> localStorage if you do not copy.
} 

// Function to load cart
function loadCart() {
  const cartId = cartIdInput.value; //cartId is set to the value of the cartIdInput field
  const savedCart = JSON.parse(localStorage.getItem(cartId));
  //retrieves the cart from local storage using the cartId and parses it to convert it back to an array of objects > assigned to the const variable savedCart
  if (savedCart) {
    cart = savedCart;//if savedCart is not null, the cart array is set to the savedCart array
    totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); //total cost is updated by adding the price multiplied by the quantity of each item in the cart
    displayCart(); //displayCart function is called to display the cart items
  } else {
    alert('No cart found with this ID.');
  }
}

// Function to load the saved cart from local storage on page load
function loadSavedCartOnPageLoad() {
  const savedCart = JSON.parse(localStorage.getItem('currentCart'));
  if (savedCart) {
    cart = savedCart;
    totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    displayCart();
  }
}

// Save cart to local storage before page unload
window.addEventListener('beforeunload', () => {
  localStorage.setItem('currentCart', JSON.stringify(cart));
  //key (currentCart) value (cart array as a JSON string) is added to browser local storage
  //triggered when the page is about to be unloaded (refreshed, closed, etc.)
});

// when page load is triggered 'load' event listener will call the function loadSavedCartOnPageLoad
window.addEventListener('load', loadSavedCartOnPageLoad);

// Event listeners for save and load buttons
saveCartBtn.addEventListener('click', saveCart);
loadCartBtn.addEventListener('click', loadCart);
