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

alert("Thank you for your message!");

document.getElementById("feedbackForm").reset();

}