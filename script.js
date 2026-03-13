function joinNow() {
alert("Welcome to ABC Fitness Studio! Please visit the About page to contact us and start your membership.");
}

function subscribe() {
alert("Thank you for subscribing.");
}

// CART STORAGE
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(item) {
cart.push(item);
sessionStorage.setItem("cart", JSON.stringify(cart));
alert("Item added to the cart.");
}

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

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let message = document.getElementById("message").value;

let feedback = {
name: name,
email: email,
phone: phone,
message: message
};

localStorage.setItem("customerFeedback", JSON.stringify(feedback));

displayFeedback();

document.getElementById("feedbackForm").reset();

}

function displayFeedback(){

let storedFeedback = localStorage.getItem("customerFeedback");

if(storedFeedback){

let feedback = JSON.parse(storedFeedback);

document.getElementById("feedbackDisplay").innerHTML =
"<p><strong>Name:</strong> " + feedback.name + "</p>" +
"<p><strong>Email:</strong> " + feedback.email + "</p>" +
"<p><strong>Phone:</strong> " + feedback.phone + "</p>" +
"<p><strong>Message:</strong> " + feedback.message + "</p>";

}

}

window.onload = displayFeedback;