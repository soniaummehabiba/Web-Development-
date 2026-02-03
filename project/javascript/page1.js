const softwareProducts = [
    { id: 1, name: "Data Analyzer Pro", price: 49.99, description: "Analyze data with ease." },
    { id: 2, name: "Graphic Design", price: 199.00, description: "Professional graphics tools." },
    { id: 3, name: "Web Development", price: 14.50, description: "Organize your life better." },
    { id: 4, name: "Code Editor X", price: 10.00, description: "Free developer environment." }
];

const softwareListEl = document.getElementById('software-list');
const cartCountEl = document.getElementById('cart-count');
let cartItemCount = 0;

// Function to render all software products
function renderProducts() {
    softwareProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add('software-item');
        productEl.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button class="buy-btn" data-product-id="${product.id}">Buy Now</button>
        `;
        softwareListEl.appendChild(productEl);
    });
}

// Function to handle the "Buy Now" button click
function handleBuyButtonClick(event) {
    if (event.target.classList.contains('buy-btn')) {
        const productId = event.target.dataset.productId;
        const product = softwareProducts.find(p => p.id == productId);
        
        if (product) {
            cartItemCount++;
            cartCountEl.textContent = cartItemCount;
            alert(`You selected "${product.name}". (Frontend simulation only)`);
            window.location.href = "page2.html";
        }
    }
}

// Event listener for the entire list (using event delegation)
softwareListEl.addEventListener('click', handleBuyButtonClick);

// Initial render
renderProducts();

