let cart = [];
let total = 0;

function addToCart(item, price, itemId) {
    const quantity = parseInt(document.getElementById(`${itemId}Quantity`).value);

    if (quantity > 0) {
        cart.push({ item, price, quantity });
        total += price * quantity;
        updateCart();
        resetQuantity(itemId);
    }
}

function adjustQuantity(itemId, change) {
    const quantityField = document.getElementById(`${itemId}Quantity`);
    let quantity = parseInt(quantityField.value) + change;

    if (quantity < 0) {
        quantity = 0;
    }

    quantityField.value = quantity;
}

function resetQuantity(itemId) {
    document.getElementById(`${itemId}Quantity`).value = 0;
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
}