<<<<<<< HEAD
function subscribe() {
alert("Thank you for subscribing.");
}

// CART STORAGE
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// VIEW CART
function viewCart() {
let cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
let display = document.getElementById("cartDisplay");

if(cartItems.length === 0){
display.innerHTML = "Your cart is empty.";
}
else{
display.innerHTML = "Items in cart: " + cartItems.join(", ");
}
}

// CLEAR CART
function clearCart() {
sessionStorage.removeItem("cart");
alert("Cart cleared.");
}

// PROCESS ORDER
function processOrder() {
alert("Thank you for your order!");
sessionStorage.removeItem("cart");
}

// CUSTOMER FEEDBACK
function saveFeedback() {
let message = document.getElementById("message").value;
localStorage.setItem("customerFeedback", message);
alert("Thank you for your message.");
=======
function subscribe() {
alert("Thank you for subscribing.");
}

function addToCart() {
alert("Item added to the cart.");
}

function clearCart() {
alert("Cart cleared.");
}

function processOrder() {
alert("Thank you for your order.");
}

function submitForm() {
alert("Thank you for your message.");
>>>>>>> 04a740e818d07f553ae1b842ff26337951004d86
}