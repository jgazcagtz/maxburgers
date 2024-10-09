// scripts.js

let total = 0;
let orderNumber = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedProduct = null;

// Complete products array
const products = [
    {
        "name": "Hamburguesa Clásica",
        "img": "https://i.imgur.com/N095izT.png",
        "price": 40,
        "description": "Acompañada con carne, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Descarnada",
        "img": "https://i.imgur.com/XnkEsrD.png",
        "price": 40,
        "description": "Acompañada únicamente con carnes frías, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Especial",
        "img": "https://i.imgur.com/Yk0EoBt.png",
        "price": 60,
        "description": "Acompañada con carne, carnes frías, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Doble",
        "img": "https://i.imgur.com/RXBsCOJ.png",
        "price": 50,
        "description": "Acompañada con carne, jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Asadera",
        "img": "https://i.imgur.com/eQTxSa7.png",
        "price": 50,
        "description": "Acompañada con carne, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Chuletón",
        "img": "https://i.imgur.com/K0uY0kP.png",
        "price": 60,
        "description": "Acompañada con carne, chuleta, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Hawái",
        "img": "https://i.imgur.com/VtqyDm4.png",
        "price": 60,
        "description": "Acompañada con carne, piña, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa Española",
        "img": "https://i.imgur.com/vZtOCPT.png",
        "price": 60,
        "description": "Acompañada con carne, salchicha abierta o picada, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hamburguesa La Max Perra",
        "img": "https://i.imgur.com/n0enM1V.png",
        "price": 85,
        "description": "Carne más chuleta, champiñón, doble queso, piña, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hot Dog Clásico",
        "img": "https://i.imgur.com/yKHFurF.png",
        "price": 40,
        "description": "Acompañado con salchicha de pavo, tira de tocino, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hot Dog Doble",
        "img": "https://i.imgur.com/e6U889D.png",
        "price": 50,
        "description": "Acompañado con salchicha de pavo, tira de tocino, jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hot Dog Asadero",
        "img": "https://i.imgur.com/hX6zjaR.png",
        "price": 50,
        "description": "Acompañado con salchicha de pavo, tira de tocino, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Hot Dog Hawái",
        "img": "https://i.imgur.com/S56Uzr7.png",
        "price": 60,
        "description": "Acompañado con salchicha de pavo, tira de tocino, piña, queso asadero, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Sincronizada Sencilla",
        "img": "https://i.imgur.com/UbDjMTB.png",
        "price": 40,
        "description": "Jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Sincronizada Especial",
        "img": "https://i.imgur.com/cIEfsjX.png",
        "price": 60,
        "description": "Pierna, Jamón, queso amarillo, cebolla, jitomate, lechuga, salsa cátsup, mostaza, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Burrito Sencillo",
        "img": "https://i.imgur.com/GutmmRC.png",
        "price": 40,
        "description": "Pierna, cebolla, jitomate, lechuga, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Burrito Especial",
        "img": "https://i.imgur.com/E5SAUIa.png",
        "price": 60,
        "description": "Pierna, salchicha, panela, cebolla, jitomate, lechuga, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Torta Sencilla",
        "img": "https://i.imgur.com/tKjH4x3.png",
        "price": 40,
        "description": "Pierna, cebolla, jitomate, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Torta Combinada",
        "img": "https://i.imgur.com/tKjH4x3.png",
        "price": 50,
        "description": "Pierna, más tu ingrediente a combinar panela, jamón etc., cebolla, jitomate, aderezo de la casa, crema, mayonesa y picante a elegir."
    },
    {
        "name": "Nachos Chicos",
        "img": "https://i.imgur.com/pbuZz1v.png",
        "price": 45,
        "description": "Pierna, totopos doraditos, frijolitos aguados, salsa de queso cheddar y rebanadas de chile jalapeño."
    },
    {
        "name": "Nachos Grandes",
        "img": "https://i.imgur.com/pbuZz1v.png",
        "price": 75,
        "description": "Pierna, totopos doraditos, frijolitos aguados, salsa de queso cheddar y rebanadas de chile jalapeño."
    },
    {
        "name": "Taco Chico",
        "img": "https://i.imgur.com/K82zTrk.png",
        "price": 15,
        "description": "Del comal a tu boca. Doble tortilla chica, acompañada de carne asada, cebolla picada, repollo, cilantro y salsa de tomate. Picante a elegir."
    },
    {
        "name": "Taco Grande",
        "img": "https://i.imgur.com/K82zTrk.png",
        "price": 30,
        "description": "Del comal a tu boca. Doble tortilla grande, acompañada de carne asada, cebolla picada, repollo, cilantro y salsa de tomate. Picante a elegir."
    },
    {
        "name": "Refresco Coca-Cola 600 ml",
        "img": "https://i.imgur.com/V1wU8sX.png",
        "price": 25,
        "description": "Refresco Coca – Cola 600 Ml No Retornable."
    },
    {
        "name": "Refresco 500 ml Vidrio",
        "img": "https://i.imgur.com/1ivK2h7.png",
        "price": 22,
        "description": "Refrescos 500 Ml de Botella de Vidrio."
    },
    {
        "name": "Agua Mineral 600 ml",
        "img": "https://i.imgur.com/tqSCval.png",
        "price": 25,
        "description": "Agua Mineral 600 Ml No Retornable."
    },
    {
        "name": "Agua Fresca 1 Lt",
        "img": "https://i.imgur.com/Kcg01sH.png",
        "price": 30,
        "description": "Agua Fresca v/Sabores de 1 Lt."
    },
    {
        "name": "Pastel de 3 Leches",
        "img": "https://i.imgur.com/QRv5x6w.png",
        "price": 50,
        "description": "Pastel de 3 leches. Rebanada."
    },
    {
        "name": "Cheesecake de Fresa",
        "img": "https://i.imgur.com/CNgDmeF.png",
        "price": 50,
        "description": "Cheesecake de fresa. Rebanada."
    }
];

// Function to create product elements
function createProductElement(product, index) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <select id="quantity-${index}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <p><button class="choose-btn" onclick="window.showProductModal(${index})">Elegir</button></p>
    `;
    return menuItem;
}

// Function to update the WhatsApp link
function updateWhatsAppLink() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const selectedDeliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;
    const deliveryAddress = document.getElementById('delivery-address').value.trim() || 'No especificada';
    const orderNotes = document.getElementById('order-notes').value.trim() || 'Sin notas adicionales';
    const message = `Número de Orden: ${orderNumber || 'Pendiente'}\nOrden de Hamburguesas:\n${cart.map(item => `${item.name} (${item.quantity}) - $${item.price} c/u`).join('\n')}\nTotal: $${total.toFixed(2)}\nMétodo de pago: ${selectedPaymentMethod}\nMétodo de entrega: ${selectedDeliveryMethod}\nDirección de Entrega: ${deliveryAddress}\nNotas: ${orderNotes}`;
    const encodedMessage = encodeURIComponent(message);
    whatsappBtn.href = `https://wa.me/523112039300?text=${encodedMessage}`;
    whatsappBtn.style.display = total > 0 ? 'inline-flex' : 'none';
}

// Function to update the cart
function updateCart() {
    const cartItemsSection = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const paypalForm = document.getElementById('paypal-form');
    const editCartItems = document.getElementById('edit-cart-items');

    cartItemsSection.innerHTML = '';
    editCartItems.innerHTML = '';
    total = 0;

    cart.forEach((item, index) => {
        cartItemsSection.innerHTML += `<p>${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>`;
        editCartItems.innerHTML += `
            <p>
                ${item.name} - 
                <button class="quantity-btn" onclick="window.decreaseQuantity(${index})">-</button>
                ${item.quantity}
                <button class="quantity-btn" onclick="window.increaseQuantity(${index})">+</button>
                = $${(item.price * item.quantity).toFixed(2)}
                <button onclick="window.removeCartItem(${index})">Eliminar</button>
            </p>`;
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
    updatePayPalForm();
    updateWhatsAppLink();
}

// Function to update PayPal form
function updatePayPalForm() {
    const paypalForm = document.getElementById('paypal-form');
    paypalForm.innerHTML = `
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_xclick" />
            <input type="hidden" name="business" value="maxburgerstepic@gmail.com" />
            <input type="hidden" name="currency_code" value="MXN" />
            <input type="hidden" name="amount" value="${(total).toFixed(2)}" />
            <input type="hidden" name="item_name" value="${cart.map(item => `${item.name} (${item.quantity})`).join(', ')}" />
            <input type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/silver-pill-paypal-44px.png" border="0" name="submit" title="Pay with PayPal" alt="PayPal - The safer, easier way to pay online!" />
        </form>
    `;
}

// Function to toggle the cart display
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = (cartElement.style.display === 'none' || cartElement.style.display === '') ? 'block' : 'none';
}

// Function to toggle the edit modal
function toggleModal() {
    const modal = document.getElementById('edit-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

// Function to toggle the product modal
function toggleProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

// Function to toggle the promo modal
function togglePromoModal() {
    const modal = document.getElementById('promo-modal');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

// Function to close modals when clicking outside
window.onclick = function(event) {
    const modals = [
        document.getElementById('edit-modal'),
        document.getElementById('product-modal'),
        document.getElementById('promo-modal')
    ];
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Function to upload order
function uploadOrder() {
    if (!orderNumber) {
        orderNumber = Math.floor(Math.random() * 1000000) + 1;
    }

    const deliveryAddress = document.getElementById('delivery-address').value.trim() || 'No especificada';
    const orderNotes = document.getElementById('order-notes').value.trim() || 'Sin notas adicionales';
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const selectedDeliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;

    const orderData = {
        timestamp: new Date().toLocaleString(),
        orderNumber: orderNumber,
        deliveryAddress: deliveryAddress,
        orderNotes: orderNotes,
        paymentMethod: selectedPaymentMethod,
        deliveryMethod: selectedDeliveryMethod,
        cart: JSON.stringify(cart),
        total: total.toFixed(2)
    };

    updateWhatsAppLink(); // Ensure WhatsApp link is updated before sending the order

    fetch('https://script.google.com/macros/s/AKfycbxsqEmzqtxJiT_9QcUJnS6MOEdlHe_OIFAJkoRGUQ7Ho67kymKUCtvmYdi3HyYM7qEafQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => {
        alert('Pedido enviado correctamente.');
        document.getElementById('whatsapp-btn').style.display = 'inline-flex';  // Ensure WhatsApp button remains visible
    })
    .catch(error => {
        console.error('Error al enviar el pedido:', error);
    });
}

// Function to clear the cart
window.clearCart = function() {
    cart.length = 0;
    updateCart();
};

// Function to refresh the cart
window.refreshCart = function() {
    clearCart();
    localStorage.removeItem('cart');
    orderNumber = null;
    document.getElementById('whatsapp-btn').style.display = 'none';
};

// Function to increase quantity
window.increaseQuantity = function(index) {
    cart[index].quantity += 1;
    updateCart();
};

// Function to decrease quantity
window.decreaseQuantity = function(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        window.removeCartItem(index);
    }
    updateCart();
};

// Function to remove cart item
window.removeCartItem = function(index) {
    cart.splice(index, 1);
    updateCart();
};

// Function to add product to cart
window.addProductToCart = function() {
    const existingProduct = cart.find(item => item.name === selectedProduct.name);

    if (existingProduct) {
        existingProduct.quantity += selectedProduct.quantity;
    } else {
        cart.push({ name: selectedProduct.name, price: selectedProduct.price, quantity: selectedProduct.quantity });
    }

    updateCart();
    toggleProductModal();
    alert(`Producto agregado al carrito: ${selectedProduct.name} x ${selectedProduct.quantity}`);
};

// Function to show product modal
window.showProductModal = function(index) {
    const product = products[index];
    const quantitySelect = document.getElementById(`quantity-${index}`);
    const quantity = parseInt(quantitySelect.value);
    selectedProduct = { ...product, quantity };

    const modalContent = document.getElementById('product-modal-content');
    modalContent.innerHTML = `
        <h3>${selectedProduct.name}</h3>
        <img src="${selectedProduct.img}" alt="${selectedProduct.name}" style="width: 100%; height: 100%; max-width: 100px; max-height: 100px; object-fit: cover;">
        <p>Precio: $${selectedProduct.price.toFixed(2)}</p>
        <p>Descripción: ${selectedProduct.description}</p>
        <p>Cantidad: ${selectedProduct.quantity}</p>
    `;

    toggleProductModal();
};

// Event listener for DOMContentLoaded to populate the menu and initialize the cart
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, attempting to render products');
    products.forEach((product, index) => {
        console.log('Adding product:', product.name);
        const menuElement = createProductElement(product, index);
        document.getElementById('menu').appendChild(menuElement);
    });
    updateCart(); // Ensure cart is updated on page load

    // Add Event Listeners to update WhatsApp link on input changes
    document.getElementById('delivery-address').addEventListener('input', updateWhatsAppLink);
    document.getElementById('order-notes').addEventListener('input', updateWhatsAppLink);

    // Add Event Listener to update WhatsApp link when clicking the WhatsApp button
    document.getElementById('whatsapp-btn').addEventListener('click', function(event) {
        updateWhatsAppLink();
    });
});

// Function to pulse the promo button after 10 seconds
setTimeout(() => {
    const promoBtn = document.getElementById('promo-btn');
    promoBtn.classList.add('pulse');
    setTimeout(() => promoBtn.classList.remove('pulse'), 3000);
}, 10000);
