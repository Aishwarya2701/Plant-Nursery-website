let cart = [];

function addToCart(plantName) {
  const plant = plants.find(p => p.name === plantName);
  cart.push(plant);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  cartItems.innerHTML = '';
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(listItem);
    total += item.price;
  }

  cartTotal.textContent = total.toFixed(2);
}

function checkout() {
  // Implement the checkout logic here
  console.log('Checking out with cart:', cart);

  // Clear the cart after checkout
  cart = [];
  updateCart();
}

const plants = [
  { name: 'Plant 1', price: 10 },
  { name: 'Plant 2', price: 15 },
  { name: 'Plant 3', price: 18 },
  { name: 'Plant 4', price: 12 },
  { name: 'Plant 5', price: 10 },
  { name: 'Plant 6', price: 15 },
  { name: 'Plant 7', price: 10 },
  { name: 'Plant 8', price: 14 },
  { name: 'Plant 9', price: 10 },
  { name: 'Plant 10', price: 13 },
];

document.addEventListener('DOMContentLoaded', () => {
  updateCart();
});